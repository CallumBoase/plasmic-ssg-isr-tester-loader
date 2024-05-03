import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";

export type RenderMarkdownProps = {
  markdownText: string;
  dangerouslyRenderHtmlTags?: boolean;
  autogenTableOfContents?: boolean;
  className?: string;
};

export function RenderMarkdown({
  markdownText,
  dangerouslyRenderHtmlTags = false,
  autogenTableOfContents = false,
  className = "",
}: RenderMarkdownProps) {
  const finalMarkdown = decodeURIComponent(markdownText);

  // Create remark and rehype plugins array conditionally
  const remarkPlugins = autogenTableOfContents ? [remarkGfm, remarkToc] : [remarkGfm];
  const rehypePlugins = [
    rehypeHighlight,
    ...(autogenTableOfContents ? [rehypeSlug] : []),
    ...(dangerouslyRenderHtmlTags ? [rehypeRaw] : [])
  ];

  return (
    <Markdown
      className={`markdown-render ${className}`}
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
    >
      {finalMarkdown}
    </Markdown>
  );
}


