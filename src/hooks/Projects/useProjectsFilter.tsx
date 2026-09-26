import React, { useEffect, useMemo, useState } from 'react';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../assets/skills';
import type { ProjectWithSkills } from '../../assets/projects-skills';

export type UseProjectsFilterOptions = {
  useQueryParameters?: boolean;
};
export interface UseProjectsFilterProps {
  skills: SkillBasic[] | SkillWithCategory[];
  projects: ProjectWithSkills[];
  options?: UseProjectsFilterOptions;
}
export const useProjectsFilter = (
  props: UseProjectsFilterProps,
) => {
  // Skill Filters
  const [skillFilters, setSkillFilters] = useState<
    Map<SkillBasic['id'], (typeof props.skills)[number]>
  >(new Map());
  const appendSkillFilters = (
    skills:
      | (typeof props.skills)[number]
      | typeof props.skills,
  ) => {
    skills = Array.isArray(skills) ? skills : [skills];
    const filters = skillFilters;
    skills.forEach((skill) => {
      if (!filters.has(skill.id))
        filters.set(skill.id, skill);
      else if (
        (skill as SkillWithCategory) &&
        (filters.get(skill.id) as SkillBasic)
      )
        filters.set(skill.id, skill);
    });
    setSkillFilters(filters);
  };
  const removeSkillFilters = (
    skills:
      | (typeof props.skills)[number]
      | typeof props.skills,
  ) => {
    skills = Array.isArray(skills) ? skills : [skills];
    const filters = skillFilters;
    skills.forEach((skill) => {
      filters.delete(skill.id);
    });
    setSkillFilters(filters);
  };
  const clearSkillFilters = () => {
    setSkillFilters(new Map());
  };
  const skillFilterOperations = {
    append: appendSkillFilters,
    remove: removeSkillFilters,
    clear: clearSkillFilters,
  };

  const filteredProjects = useMemo(() => {
    // get the skill id set of the keys for filtering
    const skillFilterIds = new Set(
      // when filter is empty, get all the skills
      skillFilters.size < 1
        ? props.skills.map((skill) => skill.id)
        : skillFilters.keys(),
    );
    // filter projects
    const projects = props.projects.filter((project) => {
      return project.skillId.some((id) => {
        return skillFilterIds.has(id);
      });
    });

    return projects;
  }, [skillFilters]);

  type Filter = {
    skills?: typeof props.skills;
  };
  const [filters, setFilters] = useState<Filter>({});
  useEffect(() => {
    let newFilters = filters;

    // update skills
    newFilters.skills =
      skillFilters.size > 0
        ? Array.from(skillFilters.values())
        : undefined;

    // set filters
    setFilters(newFilters);
  }, [skillFilters]);
  return {
    filters,
    filterOperations: {
      skills: skillFilterOperations,
    },
    /**
     * @deprecated
     */
    skillFilters: filters.skills || [],
    /**
     * @deprecated
     */
    setSkillFilters: skillFilterOperations.append,
    filteredProjects,
  };
};

export default useProjectsFilter;
