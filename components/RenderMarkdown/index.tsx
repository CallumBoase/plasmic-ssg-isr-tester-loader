import React, {useEffect} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";

//Custom plugin
import { rehypeAddCopyButton } from "./rehpyAddCopyButton";

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

  // Set up plugins
  const remarkPlugins = autoGenerateTableOfContents ? [remarkGfm, remarkToc] : [remarkGfm];
  const rehypePlugins = [
    rehypeHighlight,
    rehypeAddCopyButton,
    ...(autoGenerateTableOfContents ? [rehypeSlug] : []),
    ...(dangerouslyRenderHtmlTags ? [rehypeRaw] : [])
  ];

  //Make the "copy code" buttons work
  useEffect(() => {
    const handleCopy = (event: Event) => {
      const buttonElement = event.currentTarget as HTMLButtonElement;
      const preElement = buttonElement.parentNode as HTMLPreElement;
      const codeElement = preElement.querySelector('code');
      const code = codeElement ? codeElement.textContent || '' : '';
  
      navigator.clipboard.writeText(code).then(() => {
        console.log('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    };
  
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => button.addEventListener('click', handleCopy));
  
    return () => {
      copyButtons.forEach(button => button.removeEventListener('click', handleCopy));
    };
  }, [markdownText]); 
  

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