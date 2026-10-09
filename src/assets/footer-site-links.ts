export type SiteLink = {
  label: string;
  href: string;
  subLinks?: SiteLink[];
  icon?: HTMLElement;
};

export const siteLinks: SiteLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/?p=projects',
  },
  {
    label: 'Skills',
    href: '/?p=skills',
  },
];

export default siteLinks;
