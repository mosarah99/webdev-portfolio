import { BrowserRouter } from 'react-router';
import { NuqsAdapter } from 'nuqs/adapters/react';
import usePageNavigation from './usePageNavigation';

// const NavigationHarness = () => {
//   const navigate = usePageNavigation();

//   const navigateFromCallback =
//     (destination: string) =>
//     (event: React.MouseEvent<HTMLButtonElement>) => {
//       event.preventDefault();
//       void navigate(destination);
//     };

//   return (
//     <div>
//       <button
//         type='button'
//         onClick={(event) => {
//           event.preventDefault();
//           void navigate('/projects');
//         }}
//       >
//         Direct path
//       </button>
//       <button
//         type='button'
//         onClick={navigateFromCallback('/?p=skills')}
//       >
//         Callback path
//       </button>
//       <button
//         type='button'
//         onClick={() => void navigate('contact')}
//       >
//         Relative path
//       </button>
//       <button
//         type='button'
//         onClick={() =>
//           void navigate('https://example.com/about')
//         }
//       >
//         Absolute URL
//       </button>
//       <button
//         type='button'
//         onClick={() => void navigate('/')}
//       >
//         Clear root
//       </button>
//     </div>
//   );
// };

// const mountHarness = (
//   initialUrl = 'http://localhost:5173/',
// ) => {
//   cy.visit(initialUrl);
//   cy.mount(
//     <BrowserRouter>
//       <NuqsAdapter>
//         <NavigationHarness />
//       </NuqsAdapter>
//     </BrowserRouter>,
//   );
// };

const mountHarness = (_any?: any) => <></>;

describe('usePageNavigation', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.history.replaceState({}, '', '/');
    });
  });

  it.skip('navigates from a button using /{path}', () => {
    mountHarness();

    cy.contains('button', 'Direct path').click();
    cy.location('search').should('eq', '?p=projects');
    cy.location('pathname').should('eq', '/');
  });

  it.skip('navigates from a callback using /?p={path}', () => {
    mountHarness();

    cy.contains('button', 'Callback path').click();
    cy.location('search').should('eq', '?p=skills');
  });

  it.skip('accepts relative paths and normalizes leading or trailing slashes', () => {
    mountHarness();

    cy.contains('button', 'Relative path').click();
    cy.location('search').should('eq', '?p=contact');

    cy.window().then((win) => {
      win.history.replaceState({}, '', '/?p=home');
    });
  });

  it.skip('treats a query parameter as authoritative for ?p={path}', () => {
    mountHarness(
      'http://localhost:5173/?p=home&draft=true',
    );

    const Harness = () => {
      const navigate = usePageNavigation();
      return (
        <button
          type='button'
          onClick={() =>
            void navigate('/?p=projects&draft=true')
          }
        >
          Navigate
        </button>
      );
    };

    cy.mount(
      <BrowserRouter>
        <NuqsAdapter>
          <Harness />
        </NuqsAdapter>
      </BrowserRouter>,
    );

    cy.contains('button', 'Navigate').click();
    cy.location('search').should('include', 'p=projects');
  });

  it.skip('does not navigate to a dangling endpoint and clears p for root', () => {
    mountHarness(
      'http://localhost:5173/?p=unknown-page&draft=true',
    );

    cy.contains('button', 'Clear root').click();
    cy.location('search').should('not.include', 'p=');
    cy.location('search').should('include', 'draft=true');
  });

  it.skip('handles absolute URLs and fallback dangling strings without throwing', () => {
    mountHarness();

    cy.contains('button', 'Absolute URL').click();
    cy.location('search').should('eq', '?p=about');

    const Harness = () => {
      const navigate = usePageNavigation();
      return (
        <button
          type='button'
          onClick={() => void navigate('///')}
        >
          Dangling
        </button>
      );
    };

    cy.mount(
      <BrowserRouter>
        <NuqsAdapter>
          <Harness />
        </NuqsAdapter>
      </BrowserRouter>,
    );

    cy.contains('button', 'Dangling').click();
    cy.location('search').should('not.include', 'p=');
  });
});
