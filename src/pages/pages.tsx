import { lazy } from 'react';
import { type Page } from '../components/Navigation/Router/Router.component';

const Homepage = lazy(() => import('./Home/Home.component'));
const ProjectDetails = lazy(
  () => import('./ProjectDetails/ProjectDetails.component'),
);
const ProjectsPage = lazy(() => import('./Projects/Projects.component'));
const SkillsPage = lazy(() => import('./Skills/Skills.component'));
const ContactPage = lazy(() => import('./Contact/Contact.component'));

export const pages: Page[] = [
  { title: 'Home', slug: 'home', defaultPage: true, component: <Homepage /> },
  { title: 'Projects', slug: 'projects', component: <ProjectsPage /> },
  { title: 'Skills', slug: 'skills', component: <SkillsPage /> },
  // {
  //   title: 'Project Details',
  //   slug: '/projects/:projectId',
  //   component: <ProjectDetails />,
  // },
  {
    title: 'Contact',
    slug: 'contact',
    component: <ContactPage />,
  },
];

export default pages;
