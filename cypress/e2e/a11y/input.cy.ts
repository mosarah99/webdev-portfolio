/// <reference types="cypress" />

import pages from './Pages';

const FORM_CONTROL_TYPES = [
  // Wraps all interactive controls and defines where and how data is sent.
  { name: 'form', selector: 'form' },
  // Creates single-line fields, pickers, toggles, and upload controls.
  { name: 'input', selector: 'input' },
  // Provides a multi-line text box for longer messages or comments.
  { name: 'textarea', selector: 'textarea' },
  // Renders a dropdown menu of choices.
  { name: 'select', selector: 'select' },
  // Defines an individual selectable item inside <select> or <datalist>.
  { name: 'option', selector: 'option' },
  // Groups related <option> items under a non-selectable heading in a dropdown.
  { name: 'option group', selector: 'optgroup' },
  // Supplies autocomplete suggestions linked to an <input> element.
  { name: 'data list', selector: 'datalist' },
  // Creates a clickable button to submit, reset, or trigger scripts.
  //   { name: 'button', selector: 'button' },
  // Associates descriptive text with a control for accessibility and click-to-focus.
  //   { name: 'label', selector: 'label' },
  // Visually and semantically groups related form controls together.
  //   { name: 'fieldset', selector: 'fieldset' },
  // Adds a title or caption for a <fieldset> container.
  //   { name: 'legend', selector: 'legend' },
  // Displays the result of a calculation or user interaction.
  //   { name: 'output', selector: 'output' },
] as const;

describe('input and other form fields accessibility', () => {
  pages.forEach((page) => {
    it(`has accessible names and roles for form controls on ${page}`, () => {
      cy.visit(page).get('main').should('be.visible');

      FORM_CONTROL_TYPES.forEach(({ name, selector }) => {
        cy.get('body')
          .then(($body) => $body.find(selector))
          .then(($selectorsFound) => {
            cy.log(
              `${name} selector (${selector}): ${$selectorsFound.length} times`,
            );

            $selectorsFound.each((index, $control) => {
              cy.wrap($control).should(($element) => {
                expect(
                  $element.attr('aria-label') ||
                    $element.attr('aria-labelledby'),
                  `${name} ${index} accessible name`,
                ).to.be.a('string').and.not.be.empty;
              });
            });
          });
      });
    });
  });
});
