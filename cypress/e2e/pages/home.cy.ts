/// <reference types="cypress" />

const HOMEPAGE = "[data-testid='homepage']";
const HOMEPAGE_HERO_SECTION =
  "[data-testid='homepage__hero-section']";
const HOMEPAGE_ABOUT_SECTION =
  "[data-testid='homepage__about-section']";
const HOMEPAGE_PROJECTS_SECTION =
  "[data-testid='homepage__projects-section']";
const HOMEPAGE_CONTACTS_SECTION =
  "[data-testid='homepage__contacts-section']";

const HOMEPAGE_ABOUT_SECTION_BODY =
  "[data-testid='homepage__about-section--body']";
const HOMEPAGE_ABOUT_SECTION_BODY_SKILL_BTN =
  "[data-testid='homepage__about-section--body-skill-btn']";
const HOMEPAGE_ABOUT_SECTION_BODY_CONTACT_BTN =
  "[data-testid='homepage__about-section--body-contact-btn']";

const HOMEPAGE_PROJECTS_SECTION_PROJECT =
  "[data-testid='homepage__projects-section--project']";
const HOMEPAGE_PROJECTS_SECTION_PROJECT_SKILL_BTN =
  "[data-testid='homepage__projects-section--project-skill-btn']";
const HOMEPAGE_PROJECTS_SECTION_PROJECT_PROJECT_BTN =
  "[data-testid='homepage__projects-section--project-project-btn']";

describe('Test Homepage UI and UX', () => {
  it('is homepage live?', () => {
    cy.visit('').get(HOMEPAGE).should('exist');
  });

  it('all compulsary sections exists', () => {
    cy.visit('').get(HOMEPAGE);

    cy.get(HOMEPAGE_HERO_SECTION).should(($section) => {
      expect($section, 'hero section').exists;
    });
    cy.get(HOMEPAGE_ABOUT_SECTION).should(($section) => {
      expect($section, 'about section').exists;
    });
    cy.get(HOMEPAGE_PROJECTS_SECTION).should(($section) => {
      expect($section, 'projects section').exists;
    });
    cy.get(HOMEPAGE_CONTACTS_SECTION).should(($section) => {
      expect($section, 'contacts section').exists;
    });
  });

  it('hero section takes >80vh', () => {
    cy.visit('').get(HOMEPAGE_HERO_SECTION);

    cy.window().then(({ innerHeight }) => {
      cy.get(HOMEPAGE_HERO_SECTION).then(($section) => {
        expect(
          $section[0].clientHeight,
        ).to.be.greaterThanOrEqual(innerHeight * 0.8);
      });
    });
  });

  it("hero section contains text 'Sadat Rahman' as H1", () => {
    cy.visit('')
      .get(HOMEPAGE_HERO_SECTION)
      .should('contain.html', 'h1')
      .get('h1')
      .should('contain.text', 'Sadat Rahman');
  });

  it('hero section has a valid background image', () => {
    cy.visit('')
      .get(HOMEPAGE_HERO_SECTION)
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
        return cy
          .request({
            url: imageUrl,
            failOnStatusCode: false,
          })
          .its('status')
          .should('equal', 200);
      });
  });

  it('about section has "About Me" in h2', () => {
    cy.visit('')
      .get(HOMEPAGE_ABOUT_SECTION)
      .get('h2')
      .should('exist')
      .should('contain.text', 'About Me');
  });

  it('about section body has texts', () => {
    cy.visit('')
      .get(HOMEPAGE_ABOUT_SECTION_BODY)
      .should('exist')
      .should(($body) => {
        expect(
          $body.text().trim().length,
        ).to.be.greaterThan(20);
      });
  });

  it('about section skills button', () => {
    const skillPageUrl = '/?p=skills';

    cy.visit('')
      .get(HOMEPAGE_ABOUT_SECTION_BODY_SKILL_BTN)
      .should('exist')
      .invoke('text')
      .should('match', /skill/i);

    cy.get(HOMEPAGE_ABOUT_SECTION_BODY_SKILL_BTN)
      .should('have.attr', 'href')
      .and('include', skillPageUrl);

    cy.get(HOMEPAGE_ABOUT_SECTION_BODY_SKILL_BTN).click();
    cy.location('pathname').should('eq', skillPageUrl);
  });

  it('about section contact button', () => {
    const contactPageUrl = '/?p=contact';

    cy.visit('')
      .get(HOMEPAGE_ABOUT_SECTION_BODY_CONTACT_BTN)
      .should('exist')
      .invoke('text')
      .should('match', /contact/i);

    cy.get(HOMEPAGE_ABOUT_SECTION_BODY_CONTACT_BTN)
      .should('have.attr', 'href')
      .and('include', contactPageUrl);

    cy.get(HOMEPAGE_ABOUT_SECTION_BODY_CONTACT_BTN).click();
    cy.location('pathname').should('eq', contactPageUrl);
  });

  it('projects section has "Projects" in h2', () => {
    cy.visit('')
      .get(HOMEPAGE_PROJECTS_SECTION)
      .get('h2')
      .should('exist')
      .should('contain.text', 'Project');
  });

  it('projects section has at least a project', () => {
    cy.visit('')
      .get(HOMEPAGE_PROJECTS_SECTION_PROJECT)
      .should('exist')
      .should('have.length.greaterThan', 0);
  });

  it('projects section projects should be all featured', () => {
    let numProjects = 0;
    let numChips = 0;

    cy.visit('')
      .get(HOMEPAGE_PROJECTS_SECTION_PROJECT)
      .then(($projects) => (numProjects = $projects.length))
      .get('div.MuiChip-root')
      .should('exist')
      .then(($chips) => {
        numChips = $chips.length;
        return $chips;
      })
      .invoke('text')
      .should('match', /feature/i)
      .should(() =>
        expect(
          numProjects,
          'every project should be featured project',
        ).to.be.equal(numChips),
      );
  });

  it('projects section skills button', () => {
    const skillPageUrl = '/?p=skills';

    cy.visit('')
      .get(HOMEPAGE_PROJECTS_SECTION_PROJECT_SKILL_BTN)
      .should('exist')
      .invoke('text')
      .should('match', /skill/i);

    cy.get(HOMEPAGE_PROJECTS_SECTION_PROJECT_SKILL_BTN)
      .should('have.attr', 'href')
      .and('include', skillPageUrl);

    cy.get(
      HOMEPAGE_PROJECTS_SECTION_PROJECT_SKILL_BTN,
    ).click();
    cy.location('pathname').should('eq', skillPageUrl);
  });

  it('projects section projects button', () => {
    const projectPageUrl = '/?p=projects';

    cy.visit('')
      .get(HOMEPAGE_PROJECTS_SECTION_PROJECT_PROJECT_BTN)
      .should('exist')
      .invoke('text')
      .should('match', /project/i);

    cy.get(HOMEPAGE_PROJECTS_SECTION_PROJECT_PROJECT_BTN)
      .should('have.attr', 'href')
      .and('include', projectPageUrl);

    cy.get(
      HOMEPAGE_PROJECTS_SECTION_PROJECT_PROJECT_BTN,
    ).click();
    cy.location('pathname').should('eq', projectPageUrl);
  });

  it('contacts section has h2 heading', () => {
    cy.visit('')
      .get(HOMEPAGE_CONTACTS_SECTION)
      .get('h2')
      .should('exist')
      .should(($heading) => {
        expect(
          $heading.text().trim().length,
        ).to.be.at.least(4);
      });
  });
});
