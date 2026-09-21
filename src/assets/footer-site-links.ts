export type SiteLink = {
  title: string;
  href: string;
  subLinks?: SiteLink[];
  icon?: HTMLElement;
};

export const siteLinks: SiteLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/?p=projects',
  },
  {
    title: 'Skills',
    href: '/?p=skills',
  },
];

export default siteLinks;
