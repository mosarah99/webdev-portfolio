/// <reference types="cypress" />

const PRIMARY_HEADER = '[data-testid="primary-header"]';
const PRIMARY_HEADER_FAVICON =
  '[data-testid="primary-header__favicon"]';
const PRIMARY_HEADER_NAVBAR =
  "[data-testid='primary-header__navbar']";
const PRIMARY_HEADER_COLOR_SCHEME_BTN =
  "[data-testid='primary-header__colorscheme-btn']";
const PRIMARY_HEADER_COLOR_SCHEME_ICON_LIGHT =
  "[data-testid='primary-header-color-scheme-icon__light']";
const PRIMARY_HEADER_COLOR_SCHEME_ICON_DARK =
  "[data-testid='primary-header-color-scheme-icon__dark']";
const PRIMARY_HEADER_COLOR_SCHEME_ICON_SYSTEM =
  "[data-testid='primary-header-color-scheme-icon__system']";

describe('Test Primary Header', () => {
  it('primary header exists', () => {
    cy.visit('').get(PRIMARY_HEADER).should('exist');
  });

  it('primary header has a favicon', () => {
    cy.visit('')
      .get(PRIMARY_HEADER_FAVICON)
      .should('exist');
  });

  it('favicon has text mosarah99', () => {
    cy.visit('')
      .get(PRIMARY_HEADER_FAVICON)
      .should('contain.text', 'mosarah99');
  });

  it('favicon extends the header on mobile viewport', () => {
    cy.viewport(375, 667); // iPhone SE viewport
    cy.visit('');

    cy.get(PRIMARY_HEADER).then(($header) => {
      const headerWidth =
        $header[0].getBoundingClientRect().width;

      cy.get(PRIMARY_HEADER_FAVICON).should(($favicon) => {
        const faviconWidth =
          $favicon[0].getBoundingClientRect().width;

        expect(
          faviconWidth,
          'favicon button width must be 60% of header width',
        ).to.be.at.least(headerWidth * 0.6);
      });
    });

    cy.get(PRIMARY_HEADER_FAVICON)
      .get('span')
      .should('exist')
      .then(($fav_span) => {
        expect(
          $fav_span[0].clientWidth,
          'favicon button span width must be greater than 0',
        ).to.be.at.least(1);
      });
  });

  it('favicon redirects to homepage', () => {
    cy.visit('/?p=contact')
      .get(PRIMARY_HEADER_FAVICON)
      .click();

    cy.url().should('equal', Cypress.config('baseUrl'));
  });

  it('favicon redirects to homepage on mobile viewport', () => {
    cy.viewport(375, 667) // iPhone SE viewport
      .visit('/?p=contact')
      .get(PRIMARY_HEADER_FAVICON)
      .click();

    cy.url().should('equal', Cypress.config('baseUrl'));
  });

  it('navbar exists on desktop viewport', () => {
    cy.viewport('macbook-13')
      .visit('')
      .get(PRIMARY_HEADER_NAVBAR)
      .should('exist');
  });

  it("navbar doesn't exist on mobile viewport", () => {
    cy.viewport('iphone-5')
      .visit('')
      .get(PRIMARY_HEADER_NAVBAR)
      .should('not.exist');
  });

  it('header has color scheme button', () => {
    cy.visit('')
      .get(PRIMARY_HEADER_COLOR_SCHEME_BTN)
      .should('exist');
  });

  it('header has color scheme button in mobile view', () => {
    cy.viewport('iphone-5')
      .visit('')
      .get(PRIMARY_HEADER_COLOR_SCHEME_BTN)
      .should('exist');
  });

  it('color scheme button switches color schemes', () => {
    cy.visit('')
      .clearAllCookies()
      .clearAllLocalStorage()
      .clearAllSessionStorage();

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_SYSTEM).should(
      'exist',
    );
    cy.window().then(({ localStorage }) => {
      expect(
        localStorage.getItem('mui-mode'),
        'localStorage stored value for mui-mode',
      ).to.be.null;
    });

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_BTN).click();

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_SYSTEM).should(
      'not.exist',
    );
    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_LIGHT).should(
      'exist',
    );
    cy.window().then(({ localStorage }) => {
      expect(
        localStorage.getItem('mui-mode'),
        'localStorage stored value for mui-mode',
      ).to.equal('light');
    });

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_BTN).click();

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_LIGHT).should(
      'not.exist',
    );
    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_DARK).should(
      'exist',
    );
    cy.window().then(({ localStorage }) => {
      expect(
        localStorage.getItem('mui-mode'),
        'localStorage stored value for mui-mode',
      ).to.equal('dark');
    });

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_BTN).click();

    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_DARK).should(
      'not.exist',
    );
    cy.get(PRIMARY_HEADER_COLOR_SCHEME_ICON_SYSTEM).should(
      'exist',
    );
    cy.window().then(({ localStorage }) => {
      expect(
        localStorage.getItem('mui-mode'),
        'localStorage stored value for mui-mode',
      ).to.equal('system');
    });
  });

  it('primary header always takes 100vw', () => {
    cy.visit('');

    for (
      let width = Cypress.config('viewportWidth') + 300;
      width > 300;
      width = width - 10
    ) {
      cy.viewport(width, Cypress.config('viewportHeight'));

      cy.get(PRIMARY_HEADER).should(($header) => {
        expect($header[0].clientWidth).to.be.equal(width);
      });
    }
  });

  it('primary header height changes when scrolled', () => {
    cy.viewport('iphone-3')
      .visit('')
      .get(PRIMARY_HEADER)
      .wait(100);

    cy.document().then((document) => {
      if (
        document.body.scrollHeight <=
        document.defaultView!.innerHeight
      ) {
        return;
      }

      cy.get(PRIMARY_HEADER).then(($header) => {
        const initialHeight =
          $header[0].getBoundingClientRect().height;

        cy.scrollTo('bottom');
        cy.get(PRIMARY_HEADER).should(($scrolledHeader) => {
          const scrolledHeight =
            $scrolledHeader[0].getBoundingClientRect()
              .height;

          expect(scrolledHeight).to.be.lessThan(
            initialHeight,
          );
        });
      });
    });
  });
});
