type ConsoleMethod =
  | 'debug'
  | 'info'
  | 'log'
  | 'warn'
  | 'error';

type ConsoleCall = {
  method: ConsoleMethod;
  args: unknown[];
};

const consoleCalls: ConsoleCall[] = [];
const instrumentedConsoles = new WeakSet<Console>();
const consoleMethods: ConsoleMethod[] = [
  'debug',
  'info',
  'log',
  'warn',
  'error',
];

function instrumentConsole(consoleObject: Console) {
  if (instrumentedConsoles.has(consoleObject)) return;

  instrumentedConsoles.add(consoleObject);

  for (const method of consoleMethods) {
    const original = consoleObject[method] as (
      ...args: unknown[]
    ) => void;

    Object.defineProperty(consoleObject, method, {
      configurable: true,
      value: (...args: unknown[]) => {
        consoleCalls.push({ method, args });
        original.apply(consoleObject, args);
      },
    });
  }
}

function formatArgs(args: unknown[]) {
  return args
    .map((arg) => {
      if (typeof arg === 'string') return arg;

      try {
        return JSON.stringify(arg) ?? String(arg);
      } catch {
        return String(arg);
      }
    })
    .join(' ');
}

Cypress.on('window:before:load', (win) =>
  instrumentConsole(win.console),
);

beforeEach(() => {
  consoleCalls.length = 0;
  cy.window({ log: false }).then((win) =>
    instrumentConsole(win.console),
  );
});

afterEach(() => {
  for (const { method, args } of consoleCalls) {
    Cypress.log({
      name: `console.${method}`,
      message: formatArgs(args),
    });
  }

  const unexpectedCalls = consoleCalls.filter(
    ({ method }) => method === 'warn' || method === 'error',
  );

  expect(
    unexpectedCalls,
    'console.warn and console.error calls',
  ).to.deep.equal([]);
});
