/// <reference types="cypress" />

const SKILLS_PAGE_URL = '/?p=skills';

const SKILLSPAGE = "[data-testid='skillspage']";
const SKILLSPAGE_HERO =
  "[data-testid='skillspage__hero-section']";
const SKILLSPAGE_STACKS =
  "[data-testid='skillspage__stacks-section']";
const SKILLSPAGE_STACKS_STACK =
  "[data-testid='skillspage__stacks-section--stack']";
const SKILLSPAGE_SKILL =
  "[data-testid='skillspage__skill-section']";
const SKILLSPAGE_SKILL_SKILLS =
  "[data-testid='skillspage__skill-section--skills']";
const SKILLSPAGE_SKILL_SKILLS_CATEGORY =
  "[data-testid='skillspage__skill-section--skills-category']";
const SKILLCATEGORYCARD_SKILL =
  "[data-testid='skillcategorycard__skill']";

describe('Test Skills page UI and UX', () => {
  it('skills page is reachable', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE)
      .should('exist');
  });

  it('skills page hero section loads', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_HERO)
      .should('exist');
  });
  it('skills page hero section has h1 title with text "skill"', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_HERO)
      .should('contain.html', 'h1')
      .get('h1')
      .invoke('text')
      .should('match', /skill/i);
  });
  it('skills page hero section should cover >50vh', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_HERO)
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
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_HERO)
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

  it('skills page stacks section loads', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_STACKS)
      .should('exist');
  });
  it('skills page stacks section should have h1 with text "stack"', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_STACKS)
      .find('h2')
      .should('exist')
      .invoke('text')
      .should('match', /stack/i);
  });
  it('skills page stacks section must have at least 1 stack', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_STACKS_STACK)
      .should('have.length.greaterThan', 0);
  });

  it('skills page skill section loads', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_SKILL)
      .should('exist');
  });
  it('skills page skill section has h2 with text "skill"', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_SKILL)
      .find('h2')
      .should('exist')
      .invoke('text')
      .should('match', /skill/i);
  });
  it('skills page skill section has at least 1 skills category', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLSPAGE_SKILL_SKILLS_CATEGORY)
      .should('have.length.greaterThan', 0);
  });
  it('skills page skill section skills have valid images', () => {
    cy.visit(SKILLS_PAGE_URL)
      .get(SKILLCATEGORYCARD_SKILL)
      .should('have.length.greaterThan', 0)
      .find('div.MuiCardMedia-root')
      .then(($media_div_grp) => {
        const skillBgImages = $media_div_grp
          .map(
            (_, $media_div) =>
              getComputedStyle($media_div).backgroundImage,
          )
          .toArray();

        const imageUrls = skillBgImages.map(
          (backgroundImage) => {
            const match = backgroundImage.match(
              /url\(\s*(['"]?)(.*?)\1\s*\)/,
            );

            expect(match, 'background image URL').to.not.be
              .null;
            return match![2];
          },
        );

        return cy.window().then((win) =>
          Promise.all(
            imageUrls.map(
              (url) =>
                new Promise<HTMLImageElement>(
                  (resolve, reject) => {
                    const image = new win.Image();
                    image.onload = () => resolve(image);
                    image.onerror = () =>
                      reject(
                        new Error(
                          `Image failed to load: ${url}`,
                        ),
                      );
                    image.src = url;
                  },
                ),
            ),
          ).then((images) => {
            images.forEach((image) => {
              expect(
                image.naturalWidth,
                'width of loaded image from ' + image.src,
              ).to.be.greaterThan(0);
            });
          }),
        );
      });
  });
});
