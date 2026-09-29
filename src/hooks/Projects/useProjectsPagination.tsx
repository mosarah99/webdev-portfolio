import { useMemo, useState } from 'react';
import type { Project } from '../../assets/projectsList';
import type { ProjectWithSkills } from '../../assets/projects-skills';
export interface UseProjectsPaginationOptions<T> {
  projects: readonly T[];
  pageSize?: number;
}

export const useProjectsPagination = <
  T = Project | ProjectWithSkills,
>({
  projects,
  pageSize = 12,
}: UseProjectsPaginationOptions<T>) => {
  const itemsPerPage = Math.max(1, Math.floor(pageSize));
  const [page, setPage] = useState(1);
  const pageCount = Math.max(
    1,
    Math.ceil(projects.length / itemsPerPage),
  );
  const currentPage = Math.min(page, pageCount);
  const viewableProjects = useMemo(
    () =>
      projects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    [projects, currentPage, itemsPerPage],
  );

  const jumpPage = (requestedPage: number) => {
    setPage(
      Math.min(Math.max(requestedPage, 1), pageCount),
    );
  };

  const nextPage = () => jumpPage(currentPage + 1);
  const previousPage = () => jumpPage(currentPage - 1);

  return {
    currentPage,
    pageCount,
    viewableProjects,
    nextPage,
    previousPage,
    jumpPage,
  };
};

export default useProjectsPagination;
