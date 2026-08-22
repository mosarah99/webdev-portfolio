import { useQueryState } from 'nuqs';

export const usePageNavigation = () => {
  const [_page, setPage] = useQueryState('p');

  const navigateToPage = (slug: string) => {
    if (slug.charAt(0) === '/') slug = slug.substring(1);
    setPage(slug);
  };

  return navigateToPage;
};

export default usePageNavigation;
