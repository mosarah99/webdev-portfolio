import type { IPageContent } from '../../types/content/PageContent';
import useContentFetch from './useContentFetch';

interface TestPageContent extends IPageContent {
  title?: string;
}

const ContentFetchHarness = ({ url }: { url: URL }) => {
  const { data, isLoading, error, getSection } =
    useContentFetch<TestPageContent>(url);

  return (
    <div>
      <div data-testid='loading'>{String(isLoading)}</div>
      <div data-testid='error'>{error?.message ?? ''}</div>
      <div data-testid='title'>{data?.title ?? ''}</div>
      <div data-testid='section-id'>
        {getSection.byId('about')?.name ?? ''}
      </div>
      <div data-testid='section-name'>
        {getSection.byName('projects')?.id ?? ''}
      </div>
      <div data-testid='case-sensitive-name'>
        {getSection.byName('ABOUT', true)?.id ?? ''}
      </div>
    </div>
  );
};

describe('useContentFetch', () => {
  it('fetches content and exposes section lookup helpers', () => {
    cy.intercept('GET', '**/test-content.json', {
      statusCode: 200,
      body: {
        id: 'test-page',
        slug: 'test',
        sections: ['about', 'projects'],
        title: 'Test page',
        contents: [
          { id: 'about', name: 'About' },
          { id: 'projects', name: 'Projects' },
        ],
      },
    }).as('getContent');

    cy.mount(
      <ContentFetchHarness
        url={new URL('http://localhost/test-content.json')}
      />,
    );

    cy.wait('@getContent');
    cy.get('[data-testid="loading"]').should(
      'have.text',
      'false',
    );
    cy.get('[data-testid="error"]').should('have.text', '');
    cy.get('[data-testid="title"]').should(
      'have.text',
      'Test page',
    );
    cy.get('[data-testid="section-id"]').should(
      'have.text',
      'About',
    );
    cy.get('[data-testid="section-name"]').should(
      'have.text',
      'projects',
    );
    cy.get('[data-testid="case-sensitive-name"]').should(
      'have.text',
      '',
    );
  });

  it('reports unsuccessful responses', () => {
    cy.intercept('GET', '**/missing-content.json', {
      statusCode: 404,
      body: { message: 'Not found' },
    }).as('missingContent');

    cy.mount(
      <ContentFetchHarness
        url={
          new URL('http://localhost/missing-content.json')
        }
      />,
    );

    cy.wait('@missingContent');
    cy.get('[data-testid="loading"]').should(
      'have.text',
      'false',
    );
    cy.get('[data-testid="error"]')
      .invoke('text')
      .should('contain', 'Response error');
  });
});
