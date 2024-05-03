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
  className?: string;
};

export function RenderMarkdown({
  markdownText,
  dangerouslyRenderHtmlTags,
  className,
}: RenderMarkdownProps) {
  //The component can accept URI encoded content
  //We decode it here
  //It doesn't matter if the content is not encoded, the decoding won't affect it
  const finalMarkdown = decodeURIComponent(markdownText);

  if (dangerouslyRenderHtmlTags === true) {
    return (
      <Markdown
        className={`markdown-render ${className}`}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSlug]}
      >
        {finalMarkdown}
      </Markdown>
    );
  } else {
    return (
      <Markdown
        className={`markdown-render ${className}`}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[rehypeHighlight, rehypeSlug]}
      >
        {finalMarkdown}
      </Markdown>
    );
  }
}
