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
  header?: React.ReactElement;
  footer?: React.ReactElement;
  pages: Page[];
}

export const Router = ({ ...props }: RouterProps) => {
  const { pages } = props;
  if (pages.length === 0)
    pages.push({ slug: '', component: <React.Fragment /> });
  const defaultPage = pages.find((page) => page.defaultPage) ?? pages[0];
  const errorPage = pages.find((page) => page.errorPage) ?? pages[0];
  const pageMap = new Map(pages.map((page) => [page.slug, page]));
  pageMap.set('index', defaultPage);
  pageMap.set('default', defaultPage);
  pageMap.set('defaultPage', defaultPage);
  pageMap.set('error', errorPage);
  pageMap.set('errorPage', errorPage);

  const [page, _setPage] = useQueryState(
    'p',
    parseAsStringEnum(pages.map((page) => page.slug))
      .withDefault(defaultPage.slug)
      .withOptions({
        history: 'push',
        scroll: true,
        clearOnDefault: true,
      }),
  );

  const currentPage = useMemo(
    () => pageMap.get(page)?.component ?? defaultPage.component,
    [page],
  );

  return (
    <div {...props}>
      {currentPage}
      {props.children ?? <></>}
    </div>
  );
};

export default Router;
