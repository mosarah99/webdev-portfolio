import { projects } from './projectsList';
import { skillsWithCategory, type SkillWithCategory } from './skills';

export const projectsWithSkills = projects.map((project) => ({
  ...project,
  skills: project.skillId
    .map((skill) =>
      skillsWithCategory.find((s: SkillWithCategory) => s.id === skill),
    )
    .filter(Boolean),
}));

export type ProjectWithSkills = (typeof projectsWithSkills)[number];

export const featuredProjects: ProjectWithSkills[] = projectsWithSkills.filter(
  (project) => project.featured,
);

export default projectsWithSkills;
