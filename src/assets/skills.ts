export const skills = [
  {
    id: 1,
    name: 'JavaScript',
    shortname: 'JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    categoryId: 1,
  },
  {
    id: 2,
    name: 'TypeScript',
    shortname: 'TS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    categoryId: 1,
  },
  {
    id: 3,
    name: 'React',
    shortname: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    categoryId: 2,
  },
  {
    id: 4,
    name: 'Node.js',
    shortname: 'Node',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Python',
    shortname: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    categoryId: 1,
  },
  {
    id: 6,
    name: 'Django',
    shortname: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    categoryId: 2,
  },
  {
    id: 7,
    name: 'Git',
    shortname: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    categoryId: 3,
  },
  {
    id: 8,
    name: 'Docker',
    shortname: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    categoryId: 3,
  },
  {
    id: 9,
    name: 'AWS',
    shortname: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    categoryId: 3,
  },
  {
    id: 10,
    name: 'MongoDB',
    shortname: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    categoryId: 3,
  },
  {
    id: 11,
    name: 'Express.js',
    shortname: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    categoryId: 2,
  },
  {
    id: 12,
    name: 'MySQL',
    shortname: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    categoryId: 3,
  },
  {
    id: 13,
    name: 'Angular',
    shortname: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    categoryId: 2,
  },
  {
    id: 14,
    name: 'Strapi',
    shortname: 'Strapi',
    icon: 'https://www.svgrepo.com/show/354399/strapi-icon.svg',
    categoryId: 2,
  },
];

export const skillCategories = [
  {
    id: 1,
    name: 'Programming Languages',
  },
  {
    id: 2,
    name: 'Frameworks & Libraries',
  },
  {
    id: 3,
    name: 'Tools & Platforms',
  },
];

const skillsWithCategory = skills.map((skill) => ({
  ...skill,
  category: skillCategories.find(
    (category) => category.id === skill.categoryId,
  ),
}));

const skillsByCategory = new Map<
  (typeof skillCategories)[number],
  typeof skillsWithCategory
>();
skillCategories.forEach((category) => {
  skillsByCategory.set(
    category,
    skillsWithCategory.filter((skill) => skill.categoryId === category.id),
  );
});
export { skillsByCategory };

export const favoriteStacks = [
  {
    name: 'MERN Stack',
    description: 'MongoDB, Express.js, React, Node.js',
    icon: import('@mui/icons-material/Layers').then((mod) => mod.default),
    skills: [10, 11, 3, 4].map((id) =>
      skillsWithCategory.find((skill) => skill.id === id),
    ),
  },
  {
    name: 'AN-MS Stack',
    description: 'Angular, Node.js, MySQL, Strapi',
    icon: import('@mui/icons-material/Layers').then((mod) => mod.default),
    skills: [13, 4, 12, 14].map((id) =>
      skillsWithCategory.find((skill) => skill.id === id),
    ),
  },
];

export default skillsWithCategory;
