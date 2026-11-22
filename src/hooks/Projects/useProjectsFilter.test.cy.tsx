import type { SkillBasic } from '../../assets/skills';
import type { ProjectWithSkills } from '../../assets/projects-skills';
import useProjectsFilter from './useProjectsFilter';

const reactSkill: SkillBasic = {
  id: 'react',
  name: 'React',
  shortname: 'React',
  icon: '',
  categoryId: 'frameworks',
};

const typeScriptSkill: SkillBasic = {
  id: 'typescript',
  name: 'TypeScript',
  shortname: 'TS',
  icon: '',
  categoryId: 'languages',
};

const testProject = (
  id: string,
  title: string,
  skillId: string[],
): ProjectWithSkills =>
  ({
    id,
    title,
    description: '',
    image: '',
    detail_description: '',
    skillId,
    skills: [],
  }) as ProjectWithSkills;

const projects = [
  testProject('react-project', 'React project', ['react']),
  testProject('ts-project', 'TypeScript project', [
    'typescript',
  ]),
  testProject('full-stack', 'Full-stack project', [
    'react',
    'typescript',
  ]),
];

const FilterHarness = () => {
  const { filteredProjects, filters, filterOperations } =
    useProjectsFilter({
      skills: [reactSkill, typeScriptSkill],
      projects,
    });

  return (
    <div>
      <div data-testid='filtered-projects'>
        {filteredProjects
          .map((project) => project.title)
          .join(',')}
      </div>
      <div data-testid='filters'>
        {filters.skills
          ?.map((skill) => skill.name)
          .join(',') ?? ''}
      </div>
      <button
        type='button'
        onClick={() =>
          filterOperations.skills.append(reactSkill)
        }
      >
        Add React
      </button>
      <button
        type='button'
        onClick={() =>
          filterOperations.skills.append([
            reactSkill,
            typeScriptSkill,
          ])
        }
      >
        Add both
      </button>
      <button
        type='button'
        onClick={() =>
          filterOperations.skills.remove(reactSkill)
        }
      >
        Remove React
      </button>
      <button
        type='button'
        onClick={filterOperations.skills.clear}
      >
        Clear filters
      </button>
    </div>
  );
};

describe('useProjectsFilter', () => {
  it('returns all projects when no skills are selected', () => {
    cy.mount(<FilterHarness />);

    cy.get('[data-testid="filtered-projects"]').should(
      'have.text',
      'React project,TypeScript project,Full-stack project',
    );
    cy.get('[data-testid="filters"]').should(
      'have.text',
      '',
    );
  });

  it('appends a skill filter and matches projects containing it', () => {
    cy.mount(<FilterHarness />);

    cy.contains('button', 'Add React').click();
    cy.get('[data-testid="filters"]').should(
      'have.text',
      'React',
    );
    cy.get('[data-testid="filtered-projects"]').should(
      'have.text',
      'React project,Full-stack project',
    );
  });

  it('can append multiple filters and remove one filter', () => {
    cy.mount(<FilterHarness />);

    cy.contains('button', 'Add both').click();
    cy.get('[data-testid="filters"]').should(
      'have.text',
      'React,TypeScript',
    );
    cy.get('[data-testid="filtered-projects"]').should(
      'have.text',
      'React project,TypeScript project,Full-stack project',
    );

    cy.contains('button', 'Remove React').click();
    cy.get('[data-testid="filters"]').should(
      'have.text',
      'TypeScript',
    );
    cy.get('[data-testid="filtered-projects"]').should(
      'have.text',
      'TypeScript project,Full-stack project',
    );
  });

  it('clears selected filters and restores all projects', () => {
    cy.mount(<FilterHarness />);

    cy.contains('button', 'Add React').click();
    cy.contains('button', 'Clear filters').click();

    cy.get('[data-testid="filters"]').should(
      'have.text',
      '',
    );
    cy.get('[data-testid="filtered-projects"]').should(
      'have.text',
      'React project,TypeScript project,Full-stack project',
    );
  });
});
