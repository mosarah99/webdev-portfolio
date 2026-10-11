// const BASE_URL = new URL('/webdev-portfolio/');

describe('Test Server Status', () => {
  it('returns HTTP 200 from the server', () => {
    cy.request('/').its('status').should('equal', 200);
  });

  it('body loads', () => {
    cy.request('/').get('body');
  });

  it('dix#root exists', () => {
    cy.visit('').get('div#root');
  });

  it('div#root has children', () => {
    cy.visit('')
      .get('div#root')
      .then((el) => {
        assert(el.length > 0);
      });
  });
});
