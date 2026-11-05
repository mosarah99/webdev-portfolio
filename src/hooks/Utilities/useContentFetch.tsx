import { useEffect, useState } from 'react';
import {
  type IPageContent,
  type ISection,
} from '../../types/content/PageContent';

export const useContentFetch = <T extends IPageContent>(
  url: URL,
) => {
  const [content, setContent] = useState<T | undefined>(
    undefined,
  );

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<any>(undefined);

  const fetchContent = async <T,>(path: URL) => {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(
        'Response error from: ' + response.url,
        { cause: this },
      );

    return (await response.json()) as T;
  };

  useEffect(() => {
    setLoading(true);
    fetchContent<typeof content>(url)
      .then((data) => {
        setContent(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  const getSectionById = (sectionId: ISection['id']) =>
    content?.contents?.find((c) => c.id === sectionId);
  const getSectionByName = (
    sectionName: ISection['name'],
    caseSensitive: boolean = false,
  ) =>
    content?.contents?.find(
      (c) =>
        (caseSensitive ? c.name : c.name.toLowerCase()) ===
        sectionName,
    );

  return {
    data: content,
    isLoading: loading,
    error,
    getSection: {
      byId: getSectionById,
      byName: getSectionByName,
    },
  };
};

export default useContentFetch;
