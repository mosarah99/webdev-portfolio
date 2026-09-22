import type { ComponentProps } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export interface MarkdownFancyProps extends ComponentProps<
  typeof Markdown
> {}
export const MarkdownFancy = (
  props: MarkdownFancyProps,
) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      {...props}
    />
  );
};

export default MarkdownFancy;
