import useCopyToClipboard from './useCopyToClipboard';

const CopyHarness = () => {
  const copyToClipboard = useCopyToClipboard();

  return (
    <button
      type='button'
      onClick={() => copyToClipboard('copied text')}
    >
      Copy
    </button>
  );
};

describe('useCopyToClipboard', () => {
  it('writes text to the clipboard', () => {
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, 'writeText')
        .withArgs('copied text')
        .as('writeText');
    });

    cy.mount(<CopyHarness />);
    cy.contains('button', 'Copy').click();
    cy.get('@writeText').should(
      'have.been.calledOnceWith',
      'copied text',
    );
  });

  it('can copy different text values', () => {
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, 'writeText').as(
        'writeText',
      );
    });

    const Harness = () => {
      const copyToClipboard = useCopyToClipboard();
      return (
        <button
          type='button'
          onClick={() => copyToClipboard('second value')}
        >
          Copy second value
        </button>
      );
    };

    cy.mount(<Harness />);
    cy.contains('button', 'Copy second value').click();
    cy.get('@writeText').should(
      'have.been.calledOnceWith',
      'second value',
    );
  });
});
