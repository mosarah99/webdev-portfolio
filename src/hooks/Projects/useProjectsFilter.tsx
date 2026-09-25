import React, { useMemo, useState } from 'react';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../assets/skills';
import type { ProjectWithSkills } from '../../assets/projects-skills';

export type UseProjectsFilterOptions = {
  useQueryParameters?: boolean;
};
export interface UseProjectsFilterProps {
  skills: SkillWithCategory[];
  projects: ProjectWithSkills[];
  options?: UseProjectsFilterOptions;
}
export const useProjectsFilter = (
  props: UseProjectsFilterProps,
) => {
  // Filtering Projects
  const [filter, setFilter] = useState<typeof props.skills>(
    [],
  );
  const filteredProjects = useMemo(() => {
    console.log(`updating filteredProjects...`);

    const skillSet =
      filter.length === 0 ? props.skills : filter;
    const targetSkillIds = new Set(
      skillSet.map((skill) => skill.id),
    );
    const filteredProjects = props.projects.filter(
      (project) => {
        // Check if any ID in the project's skillId array exists in our target set
        return project.skillId.some((id) => {
          return targetSkillIds.has(id);
        });
      },
    );
    // setFilteredProjects(filteredProjects);
    return filteredProjects;
  }, [filter, setFilter]);

  return {
    skillFilters: filter,
    setSkillFilters: setFilter,
    filteredProjects,
  };
};

export default useProjectsFilter;
