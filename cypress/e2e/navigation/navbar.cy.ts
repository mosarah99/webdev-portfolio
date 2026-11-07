/// <reference types="cypress" />

const NAVBAR = "[data-testid='navbar']";
const NAVBAR_BUTTON = "[data-testid='navbar__button']";

describe('Test Navbar UI/UX', () => {
  it('navbar loads', () => {
    cy.visit('');

    cy.viewport('macbook-16');
    cy.get(NAVBAR).should('exist');

    cy.viewport('macbook-11');
    cy.get(NAVBAR).should('exist');

    cy.viewport('ipad-2');
    cy.get(NAVBAR).should('exist');

    cy.viewport('ipad-2');
    cy.get(NAVBAR).should('exist');

    cy.viewport('samsung-note9');
    cy.get(NAVBAR).should('exist');

    cy.viewport('iphone-8');
    cy.get(NAVBAR).should('exist');

    cy.viewport('iphone-6');
    cy.get(NAVBAR).should('exist');

    cy.viewport('iphone-3');
    cy.get(NAVBAR).should('exist');
  });

  const PAGE = "[data-testid$='page']";

  it('every nav button has a destination and loads that page', () => {
    cy.visit('');

    cy.get(NAVBAR_BUTTON)
      .should('have.length.greaterThan', 1)
      .each(($button, index, $buttons) => {
        const href = $button.attr('href');
        expect(href, 'advertised URL').to.be.a('string').and
          .not.be.empty;
        const startingButton =
          $buttons[index === 0 ? 1 : 0];
        const startingHref =
          startingButton.getAttribute('href');
        expect(startingHref, 'starting page URL').to.be.a(
          'string',
        ).and.not.be.empty;

        cy.visit(startingHref!).then(() => {
          cy.get(PAGE)
            .first()
            .invoke('attr', 'data-testid')
            .then((startingPage) => {
              cy.get(NAVBAR_BUTTON).eq(index).click();

              cy.location('search').should('eq', href);
              cy.get(PAGE).should(($page) => {
                expect(
                  $page.first().attr('data-testid'),
                ).not.to.eq(startingPage);
              });
            });
        });
      });
  });
});
