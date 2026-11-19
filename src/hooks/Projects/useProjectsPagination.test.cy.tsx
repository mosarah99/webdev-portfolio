import type { Project } from '../../assets/projectsList';
import useProjectsPagination from './useProjectsPagination';

const projects: Project[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: `${index + 1}`,
    title: `Project ${index + 1}`,
    description: '',
    image: '',
    detail_description: '',
    skillId: [],
  }),
);

const PaginationHarness = ({
  pageSize = 2,
}: {
  pageSize?: number;
}) => {
  const pagination = useProjectsPagination({
    projects,
    pageSize,
  });

  return (
    <div>
      <div data-testid='current-page'>
        {pagination.currentPage}
      </div>
      <div data-testid='page-count'>
        {pagination.pageCount}
      </div>
      <div data-testid='viewable-projects'>
        {pagination.viewableProjects
          .map((project) => project.title)
          .join(',')}
      </div>
      <button
        type='button'
        onClick={pagination.previousPage}
      >
        Previous
      </button>
      <button
        type='button'
        onClick={pagination.nextPage}
      >
        Next
      </button>
      <button
        type='button'
        onClick={() => pagination.jumpPage(99)}
      >
        Jump high
      </button>
      <button
        type='button'
        onClick={() => pagination.jumpPage(-10)}
      >
        Jump low
      </button>
      <button
        type='button'
        onClick={() => pagination.jumpPage(2)}
      >
        Jump two
      </button>
    </div>
  );
};

describe('useProjectsPagination', () => {
  it('returns the correct initial page and page count', () => {
    cy.mount(<PaginationHarness />);

    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '1',
    );
    cy.get('[data-testid="page-count"]').should(
      'have.text',
      '3',
    );
    cy.get('[data-testid="viewable-projects"]').should(
      'have.text',
      'Project 1,Project 2',
    );
  });

  it('moves between pages and slices the project list', () => {
    cy.mount(<PaginationHarness />);

    cy.contains('button', 'Next').click();
    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '2',
    );
    cy.get('[data-testid="viewable-projects"]').should(
      'have.text',
      'Project 3,Project 4',
    );

    cy.contains('button', 'Next').click();
    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '3',
    );
    cy.get('[data-testid="viewable-projects"]').should(
      'have.text',
      'Project 5',
    );

    cy.contains('button', 'Previous').click();
    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '2',
    );
  });

  it('clamps requested pages within the valid range', () => {
    cy.mount(<PaginationHarness />);

    cy.contains('button', 'Jump high').click();
    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '3',
    );

    cy.contains('button', 'Jump low').click();
    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '1',
    );

    cy.contains('button', 'Jump two').click();
    cy.get('[data-testid="current-page"]').should(
      'have.text',
      '2',
    );
  });

  it('uses at least one item per page for invalid page sizes', () => {
    cy.mount(<PaginationHarness pageSize={0} />);

    cy.get('[data-testid="page-count"]').should(
      'have.text',
      '5',
    );
    cy.get('[data-testid="viewable-projects"]').should(
      'have.text',
      'Project 1',
    );
  });
});
