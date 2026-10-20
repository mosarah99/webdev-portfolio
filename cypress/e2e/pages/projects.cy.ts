/// <reference types="cypress" />

const PROJECTS_PAGE_URL = '/?p=projects';

const PROJECTSPAGE = "[data-testid='projectspage']";
const PROJECTSPAGE_HERO =
  "[data-testid='projectspage__hero-section']";
const PROJECTSPAGE_FEATURED =
  "[data-testid='projectspage__featured-section']";
const PROJECTSPAGE_FEATURED_SWIPER =
  "[data-testid='projectspage__featured-section--swiper']";
const PROJECTSPAGE_FEATURED_SWIPERSLIDE =
  "[data-testid='projectspage__featured-section--swiper-slide']";
const PROJECTSPAGE_PROJECTSLIST =
  "[data-testid='projectspage__projects-list-section']";
const PROJECTSPAGE_PROJECTSLIST_FILTER =
  "[data-testid='projectspage__projects-list--filters']";
const PROJECTSPAGE_PROJECTSLIST_FILTER_BTN =
  "[data-testid='projectspage__projects-list--filters-btn']";
const PROJECTSPAGE_PROJECTSLIST_VIEWMODES_BTN =
  "[data-testid='projectspage__projects-list--viewmodes-btn']";
const PROJECTSPAGE_PROJECTSLIST_PROJECTS =
  "[data-testid='projectspage__projects-list--projects-container']";
const PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION =
  "[data-testid='projectspage__projects-list--projects-pagination']";

describe('Test Projects page UI and UX', () => {
  it('projects page is reachable', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE)
      .should('exist');
  });

  it('projects page hero section loads', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_HERO)
      .should('exist');
  });
  it('projects page hero section has h1 title with text "skill"', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_HERO)
      .should('contain.html', 'h1')
      .get('h1')
      .invoke('text')
      .should('match', /project/i);
  });
  it('projects page hero section should cover >50vh', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_HERO)
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
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_HERO)
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

  it('projects page featured section loads', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_FEATURED)
      .should('exist');
  });
  it('featured section loads more than one swiper slide', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_FEATURED_SWIPERSLIDE)
      .should('have.length.greaterThan', 1);
  });
  it('featured swiper pagination is visible at the bottom', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_FEATURED_SWIPER)
      .find(
        '.swiper-pagination.swiper-pagination-horizontal',
      )
      .should('be.visible')
      .then(($pagination) => {
        const paginationRect =
          $pagination[0].getBoundingClientRect();
        const swiperRect = $pagination
          .closest('.swiper')[0]
          ?.getBoundingClientRect();

        expect(swiperRect, 'swiper container').not.to.be
          .undefined;
        expect(
          paginationRect.bottom,
          'pagination near swiper bottom',
        ).to.be.closeTo(swiperRect!.bottom, 30);
        expect(
          $pagination.find('.swiper-pagination-bullet'),
          'pagination bullets',
        ).to.have.length.at.least(1);
      });
  });
  it('clicking a pagination marker changes the active slide', () => {
    cy.visit(PROJECTS_PAGE_URL);
    cy.get(PROJECTSPAGE_FEATURED_SWIPER).trigger(
      'mouseenter',
    );

    cy.get(PROJECTSPAGE_FEATURED_SWIPER)
      .find('.swiper-pagination-bullet')
      .eq(1)
      .click();

    cy.get(PROJECTSPAGE_FEATURED_SWIPER)
      .find('.swiper-slide-active .MuiCardHeader-title')
      .should('have.text', 'E-commerce Platform');
  });
  //   it('dragging the swiper advances its pagination marker', () => {
  //     cy.visit(PROJECTS_PAGE_URL);
  //     cy.get(PROJECTSPAGE_FEATURED_SWIPER)
  //       .scrollIntoView()
  //       .trigger('mouseenter');

  //     cy.get(PROJECTSPAGE_FEATURED_SWIPER).then(($swiper) => {
  //       //   const rect = $swiper[0].getBoundingClientRect();
  //       //   const startX = rect.left + rect.width * 0.8;
  //       //   const endX = rect.left + rect.width * 0.2;
  //       // const clientY = rect.top + rect.height / 2;
  //       const startX =
  //         $swiper[0].clientLeft +
  //         $swiper[0].clientWidth * 0.8;
  //       const endX =
  //         $swiper[0].clientLeft +
  //         $swiper[0].clientWidth * 0.2;
  //       const clientY =
  //         $swiper[0].clientTop + $swiper[0].clientHeight / 2;

  //       let prevTxt: string;
  //       cy.get('.swiper-slide-active')
  //         .invoke('text')
  //         .then((text) => (prevTxt = text));

  //       cy.wrap($swiper)
  //         .trigger('pointerdown', {
  //           pointerId: 1,
  //           pointerType: 'mouse',
  //           isPrimary: true,
  //           button: 0,
  //           buttons: 1,
  //           clientX: startX,
  //           clientY,
  //         })
  //         .trigger('pointermove', {
  //           pointerId: 1,
  //           pointerType: 'mouse',
  //           isPrimary: true,
  //           buttons: 1,
  //           clientX: endX,
  //           clientY,
  //         })
  //         .trigger('pointerup', {
  //           pointerId: 1,
  //           pointerType: 'mouse',
  //           isPrimary: true,
  //           button: 0,
  //           clientX: endX,
  //           clientY,
  //         });

  //       cy.get('.swiper-slide-active')
  //         .invoke('text')
  //         .should((text) =>
  //           expect(
  //             text,
  //             'swiping left works',
  //           ).to.be.not.equal(prevTxt),
  //         );

  //       cy.wrap($swiper)
  //         .trigger('pointerdown', {
  //           pointerId: 1,
  //           pointerType: 'mouse',
  //           isPrimary: true,
  //           button: 0,
  //           buttons: 1,
  //           clientX: endX,
  //           clientY,
  //         })
  //         .trigger('pointermove', {
  //           pointerId: 1,
  //           pointerType: 'mouse',
  //           isPrimary: true,
  //           buttons: 1,
  //           clientX: startX,
  //           clientY,
  //         })
  //         .trigger('pointerup', {
  //           pointerId: 1,
  //           pointerType: 'mouse',
  //           isPrimary: true,
  //           button: 0,
  //           clientX: startX,
  //           clientY,
  //         });

  //       cy.get('.swiper-slide-active')
  //         .invoke('text')
  //         .should((text) =>
  //           expect(text, 'swiping right works').to.be.equal(
  //             prevTxt,
  //           ),
  //         );
  //     });

  //     // cy.get(PROJECTSPAGE_FEATURED_SWIPER)
  //     //   .find('.swiper-pagination-bullet-active')
  //     //   .should('have.length', 1)
  //     //   .and(($bullet) => {
  //     //     expect($bullet.index()).to.be.greaterThan(0);
  //     //   });
  //   });
  it('featured slides have media with nonzero width and height', () => {
    cy.visit(PROJECTS_PAGE_URL);
    cy.get(PROJECTSPAGE_FEATURED_SWIPERSLIDE).each(
      ($slide) => {
        cy.wrap($slide)
          .find('div.MuiCardMedia-root')
          .should('have.length', 1)
          .then(($media) => {
            const { width, height } =
              $media[0].getBoundingClientRect();

            expect(
              width * height,
              'media area',
            ).to.be.greaterThan(0);
          });
      },
    );
  });

  it('projects page projects list section loads', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_PROJECTSLIST)
      .should('exist');
  });
  it('projects page projects list has h2 with text "project"', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_PROJECTSLIST)
      .find('h2')
      .should('exist')
      .invoke('text')
      .should('match', /project/i);
  });
  /**
   * TODO: write tests for:
   * - filters
   * - different views
   * - pagination
   * - featured badges
   * - project images
   * - project details button
   */
  it('projects list filters exist', () => {
    cy.visit(PROJECTS_PAGE_URL)
      .get(PROJECTSPAGE_PROJECTSLIST_FILTER)
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'Skill Filters');
  });

  it('filter button opens the modal in an iPhone 3 viewport', () => {
    cy.viewport('iphone-3');
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_FILTER_BTN)
      .should('be.visible')
      .click();

    cy.get('div.MuiDialog-root[role="presentation"]')
      .should('be.visible')
      .and('contain.text', 'Filters')
      .and('contain.text', 'Skill Filters');
  });

  it('projects container switches from grid to list and back', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS)
      .find('img.MuiCardMedia-root')
      .should('exist');

    cy.get(PROJECTSPAGE_PROJECTSLIST_VIEWMODES_BTN)
      .contains('list')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS)
      .find('.MuiCardMedia-root')
      .should('exist')
      .and('not.have.prop', 'tagName', 'IMG');

    cy.get(PROJECTSPAGE_PROJECTSLIST_VIEWMODES_BTN)
      .contains('grid')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS)
      .find('img.MuiCardMedia-root')
      .should('exist');
  });

  it('projects list pagination loads', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .should('be.visible')
      .find('[aria-label="Go to page 2"]')
      .should('be.visible');

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-current="page"]')
      .should('have.text', '1');
  });

  it('clicking page 2 changes the current page', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-label="Go to page 2"]')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-current="page"]')
      .should('have.text', '2');
  });

  it('clicking page 3 changes the current page', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-label="Go to page 3"]')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-current="page"]')
      .should('have.text', '3');
  });

  it('pagination arrows move to the next and previous pages', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-label="Go to page 2"]')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-label="Go to next page"]')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-current="page"]')
      .should('have.text', '3');

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-label="Go to previous page"]')
      .click();

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS_PAGINATION)
      .find('[aria-current="page"]')
      .should('have.text', '2');
  });

  it('featured project badges render at the top right with nonzero dimensions', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS)
      .find('.MuiChip-root')
      .filter(':visible')
      .should('have.length.greaterThan', 0)
      .first()
      .then(($badge) => {
        const badgeRect = $badge[0].getBoundingClientRect();
        const cardRect = $badge
          .closest('.MuiCard-root')[0]
          .getBoundingClientRect();

        expect(
          badgeRect.width,
          'badge width',
        ).to.be.greaterThan(0);
        expect(
          badgeRect.height,
          'badge height',
        ).to.be.greaterThan(0);
        expect(
          badgeRect.top,
          'badge near card top',
        ).to.be.closeTo(cardRect.top + 4, 10);
        expect(
          badgeRect.right,
          'badge within card right edge',
        ).to.be.lessThan(cardRect.right);
      });
  });

  it('project images have nonzero rendered height', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS)
      .find('img.MuiCardMedia-root')
      .should('have.length.greaterThan', 0)
      .each(($image) => {
        const { height } =
          $image[0].getBoundingClientRect();
        expect(height, 'image height').to.be.greaterThan(0);
      });
  });

  it('project image URLs load and render on screen', () => {
    cy.visit(PROJECTS_PAGE_URL);

    cy.get(PROJECTSPAGE_PROJECTSLIST_PROJECTS)
      .find('img.MuiCardMedia-root')
      .should('have.length.greaterThan', 0)
      .each(($image) => {
        cy.wrap($image)
          .scrollIntoView()
          .should('be.visible')
          .should(($loadedImage) => {
            const image =
              $loadedImage[0] as HTMLImageElement;

            expect(
              image.currentSrc || image.src,
              'image URL',
            ).not.to.be.empty;
            expect(
              image.complete,
              'image request completed',
            ).to.be.true;
            expect(
              image.naturalWidth,
              'loaded image width',
            ).to.be.greaterThan(0);
            expect(
              image.naturalHeight,
              'loaded image height',
            ).to.be.greaterThan(0);

            const { width, height } =
              image.getBoundingClientRect();
            expect(
              width * height,
              'visible image area',
            ).to.be.greaterThan(0);
          });
      });
  });
});
