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
  autoGenerateTableOfContents?: boolean;
  inputTextIsEncoded?: boolean;
  className?: string;
};

export function RenderMarkdown({
  markdownText,
  dangerouslyRenderHtmlTags = false,
  autoGenerateTableOfContents = false,
  inputTextIsEncoded = false,
  className = "",
}: RenderMarkdownProps) {

  let finalMarkdown = markdownText;
  
  if (inputTextIsEncoded) {
    finalMarkdown = decodeURIComponent(markdownText);
  }

  // Create remark and rehype plugins array conditionally
  const remarkPlugins = autoGenerateTableOfContents ? [remarkGfm, remarkToc] : [remarkGfm];
  const rehypePlugins = [
    rehypeHighlight,
    ...(autoGenerateTableOfContents ? [rehypeSlug] : []),
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


