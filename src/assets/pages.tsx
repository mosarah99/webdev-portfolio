import { lazy } from 'react';

const Homepage = lazy(() => import('../pages/Home/Home.component'));
const ProjectDetails = lazy(
  () => import('../pages/ProjectDetails/ProjectDetails.component'),
);
const ProjectsPage = lazy(() => import('../pages/Projects/Projects.component'));
const SkillsPage = lazy(() => import('../pages/Skills/Skills.component'));
const ContactPage = lazy(() => import('../pages/Contact/Contact.component'));

export const pages = [
  { label: 'Home', link: '/home', element: <Homepage /> },
  { label: 'Home', link: '/', index: true, element: <Homepage /> },
  { label: 'Projects', link: '/projects', element: <ProjectsPage /> },
  { label: 'Skills', link: '/skills', element: <SkillsPage /> },
  {
    label: 'Project Details',
    link: '/projects/:projectId',
    element: <ProjectDetails />,
  },
  {
    label: 'Contact',
    link: '/contact',
    element: <ContactPage />,
  },
];

export default pages;
