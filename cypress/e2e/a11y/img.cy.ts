/// <reference types="cypress" />

import pages from './Pages';

describe('Accessibility for `img` tag', () => {
  pages.forEach((page) => {
    it(`should have alt attributes for all images on ${page}`, () => {
      cy.visit(page);
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt');
      });
    });
  });
});
