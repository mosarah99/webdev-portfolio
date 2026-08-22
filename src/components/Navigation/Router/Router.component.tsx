import React, { useEffect, useMemo, useState } from 'react';
import { parseAsStringEnum, useQueryState } from 'nuqs';

export interface Page {
  title?: string;
  slug: string;
  component: React.ReactElement;
  defaultPage?: boolean;
  errorPage?: boolean;
}

interface RouterProps extends React.ComponentPropsWithoutRef<'div'> {
  pages: Page[];
}

export const Router = ({ pages, ...props }: RouterProps) => {
  const safePages: Page[] = useMemo(
    () =>
      pages.length > 0 ? pages : [{ slug: '', component: <React.Fragment /> }],
    [pages],
  );
  const defaultPage = useMemo(
    () => safePages.find((page) => page.defaultPage) ?? safePages[0],
    [safePages],
  );
  const errorPage = useMemo(
    () => safePages.find((page) => page.errorPage) ?? safePages[0],
    [safePages],
  );
  const pageMap = useMemo(
    () => new Map(safePages.map((page) => [page.slug, page])),
    [safePages],
  );

  const [page, setPage] = useQueryState('p', {
    // defaultValue: defaultPage.slug,
    history: 'push',
    scroll: true,
    clearOnDefault: true,
  });

  useEffect(() => {
    console.log(`useEffect runs`);

    if (page === defaultPage.slug || !page) {
      setPage(null, { history: 'replace' });
    }
  }, [page, defaultPage.slug, setPage]);

  const currentComponent = useMemo(() => {
    console.log(`currentComponent updated`);

    if (!page || page === defaultPage.slug) return defaultPage.component;
    return pageMap.get(page)?.component ?? errorPage.component;
  }, [page]);

  return (
    <div {...props}>
      {currentComponent}
      {props.children ?? <></>}
    </div>
  );
};

export default Router;
