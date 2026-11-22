import PrimarySection from './PrimarySection.component';

describe('<PrimarySection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PrimarySection />);
  });
});
