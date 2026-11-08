/// <reference types="cypress" />

const CONTACT_PAGE_URL = '/?p=contact';
const CONTACTPAGE = "[data-testid='contactpage']";
const CONTACTPAGE_HERO =
  "[data-testid='contactpage__hero-section']";
const CONTACTPAGE_CONTACT =
  "[data-testid='contactpage__contact-section']";
const CONTACTPAGE_LINKEDIN =
  "[data-testid='contactpage__linkedin-section']";
const CONTACTPAGE_GITHUB =
  "[data-testid='contactpage__github-section']";
const CONTACTPAGE_MAPS =
  "[data-testid='contactpage__gmaps-section']";

describe('Test Contact page UI and UX', () => {
  it('contact page loads', () => {
    cy.visit(CONTACT_PAGE_URL);
    cy.get(CONTACTPAGE).should('exist');
  });
  it('contact page hero section has h1 with text contact', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_HERO)
      .should('exist')
      .should('contain.html', 'h1')
      .get('h1')
      .invoke('text')
      .should('match', /contact/i);
  });
  it('contact page hero section should cover >50vh', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_HERO)
      .then(($section) => {
        cy.window().should(({ innerHeight: vh }) => {
          expect(
            $section[0].scrollHeight,
            'hero section height',
          ).to.be.greaterThan(vh * 0.5);
        });
      });
  });
  it('hero section has a valid background image', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_HERO)
      .then(($section) => {
        const backgroundImage = getComputedStyle(
          $section[0],
        ).backgroundImage;

        const imageUrlMatch = backgroundImage.match(
          /url\(\s*(['"]?)(.*?)\1\s*\)/,
        );

        expect(imageUrlMatch, 'background image URL').not.to
          .be.null;

        const imageUrl = imageUrlMatch![2];

        cy.window().then((win) =>
          new Promise<HTMLImageElement>(
            (resolve, reject) => {
              const imageEl = new win.Image();
              imageEl.src = imageUrl;
              imageEl.onload = () => resolve(imageEl);
              imageEl.onerror = () =>
                reject(
                  new Error(
                    'image failed to load: ' + imageUrl,
                  ),
                );
            },
          ).then((image) =>
            expect(
              image.naturalWidth,
              'bg image width',
            ).to.be.greaterThan(0),
          ),
        );
      });
  });

  it('contact page contact section has text Sadat Rahman', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_CONTACT)
      .should('exist')
      .invoke('text')
      .should('match', /sadat/i)
      .and('match', /rahman/i);
  });

  it('contact page linkedin section has h2 with text linkedin', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_LINKEDIN)
      .should('exist')
      .should('contain.html', 'h2')
      .get('h2')
      .invoke('text')
      .should('match', /linkedin/i);
  });

  it('contact page github section has h2 with text github', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_GITHUB)
      .should('exist')
      .should('contain.html', 'h2')
      .get('h2')
      .invoke('text')
      .should('match', /github/i);
  });

  it('contact page maps section has h2 with text map', () => {
    cy.visit(CONTACT_PAGE_URL)
      .get(CONTACTPAGE_MAPS)
      .should('exist')
      .should('contain.html', 'h2')
      .get('h2')
      .invoke('text')
      .should('match', /map/i);
  });
});
