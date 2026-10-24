/// <reference types="cypress" />

const FOOTER = "[data-testid='primary-footer']";
const FOOTER_TOPBAR =
  "[data-testid='primary-footer__topbar']";
const FOOTER_SITEID =
  "[data-testid='primary-footer__site-identity']";
const FOOTER_SITELINKS =
  "[data-testid='primary-footer__site-links']";
const FOOTER_CONTACT =
  "[data-testid='primary-footer__contact']";

describe('Test Primary Footer', () => {
  it('Primary Footer loads', () => {
    cy.visit('').get(FOOTER).should('exist');
  });

  it('Footer top bar loads', () => {
    cy.visit('').get(FOOTER_TOPBAR).should('exist');
  });
  it('Footer top bar has at least 200px width', () => {
    cy.visit('')
      .get(FOOTER_TOPBAR)
      .should('have.length', 1)
      .should(($topbar) => {
        expect(
          $topbar[0].offsetWidth,
          'topbar width',
        ).to.be.at.least(200);
        expect(
          $topbar[0].offsetHeight,
          'topbar height',
        ).to.be.at.least(4);
      });
  });

  it('Footer site identity exists', () => {
    cy.visit('').get(FOOTER_SITEID).should('exist');
  });
  it('Footer site identity has favicon', () => {
    cy.visit('')
      .get(FOOTER_SITEID)
      .find('img')
      .should('exist');
  });

  it('Footer site links exists', () => {
    cy.visit('').get(FOOTER_SITELINKS).should('exist');
  });

  it('Footer contact exists', () => {
    cy.visit('').get(FOOTER_CONTACT).should('exist');
  });
});
