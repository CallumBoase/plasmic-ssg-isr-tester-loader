import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

export type RenderMarkdownProps = {
  content: string;
  isEncoded: boolean;
  className?: string;
};

export function RenderMarkdown({ content, isEncoded, className }: RenderMarkdownProps) {

  const mdEnc = `%23%20A%20demo%20of%20%60react-markdown%60%0A%0A%60react-markdown%60%20is%20a%20markdown%20component%20for%20React.%0A%0A%F0%9F%91%89%20Changes%20are%20re-rendered%20as%20you%20type.%0A%0A%F0%9F%91%88%20Try%20writing%20some%20markdown%20on%20the%20left.%0A%0A%23%23%20Overview%0A%0A*%20Follows%20%5BCommonMark%5D(https%3A%2F%2Fcommonmark.org)%0A*%20Optionally%20follows%20%5BGitHub%20Flavored%20Markdown%5D(https%3A%2F%2Fgithub.github.com%2Fgfm%2F)%0A*%20Renders%20actual%20React%20elements%20instead%20of%20using%20%60dangerouslySetInnerHTML%60%0A*%20Lets%20you%20define%20your%20own%20components%20(to%20render%20%60MyHeading%60%20instead%20of%20%60%27h1%27%60)%0A*%20Has%20a%20lot%20of%20plugins%0A%0A%23%23%20Contents%0A%0AHere%20is%20an%20example%20of%20a%20plugin%20in%20action%0A(%5B%60remark-toc%60%5D(https%3A%2F%2Fgithub.com%2Fremarkjs%2Fremark-toc)).%0A**This%20section%20is%20replaced%20by%20an%20actual%20table%20of%20contents**.%0A%0A%23%23%20Syntax%20highlighting%0A%0AHere%20is%20an%20example%20of%20a%20plugin%20to%20highlight%20code%3A%0A%5B%60rehype-highlight%60%5D(https%3A%2F%2Fgithub.com%2Frehypejs%2Frehype-highlight).%0A%0A%60%60%60js%0Aimport%20React%20from%20%27react%27%0Aimport%20ReactDOM%20from%20%27react-dom%27%0Aimport%20Markdown%20from%20%27react-markdown%27%0Aimport%20rehypeHighlight%20from%20%27rehype-highlight%27%0A%0Aconst%20markdown%20%3D%20%60%0A%23%20Your%20markdown%20here%0A%60%0A%0AReactDOM.render(%0A%20%20%3CMarkdown%20rehypePlugins%3D%7B%5BrehypeHighlight%5D%7D%3E%7Bmarkdown%7D%3C%2FMarkdown%3E%2C%0A%20%20document.querySelector(%27%23content%27)%0A)%0A%60%60%60%0A%0APretty%20neat%2C%20eh%3F%0A%0A%23%23%20GitHub%20flavored%20markdown%20(GFM)%0A%0AFor%20GFM%2C%20you%20can%20*also*%20use%20a%20plugin%3A%0A%5B%60remark-gfm%60%5D(https%3A%2F%2Fgithub.com%2Fremarkjs%2Freact-markdown%23use).%0AIt%20adds%20support%20for%20GitHub-specific%20extensions%20to%20the%20language%3A%0Atables%2C%20strikethrough%2C%20tasklists%2C%20and%20literal%20URLs.%0A%0AThese%20features%20**do%20not%20work%20by%20default**.%0A%F0%9F%91%86%20Use%20the%20toggle%20above%20to%20add%20the%20plugin.%0A%0A%7C%20Feature%20%20%20%20%7C%20Support%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%0A%7C%20---------%3A%20%7C%20%3A-------------------%20%7C%0A%7C%20CommonMark%20%7C%20100%25%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%0A%7C%20GFM%20%20%20%20%20%20%20%20%7C%20100%25%20w%2F%20%60remark-gfm%60%20%7C%0A%0A~~strikethrough~~%0A%0A*%20%5B%20%5D%20task%20list%0A*%20%5Bx%5D%20checked%20item%0A%0Ahttps%3A%2F%2Fexample.com%0A%0A%23%23%20HTML%20in%20markdown%0A%0A%E2%9A%A0%EF%B8%8F%20HTML%20in%20markdown%20is%20quite%20unsafe%2C%20but%20if%20you%20want%20to%20support%20it%2C%20you%20can%0Ause%20%5B%60rehype-raw%60%5D(https%3A%2F%2Fgithub.com%2Frehypejs%2Frehype-raw).%0AYou%20should%20probably%20combine%20it%20with%0A%5B%60rehype-sanitize%60%5D(https%3A%2F%2Fgithub.com%2Frehypejs%2Frehype-sanitize).%0A%0A%3Cblockquote%3E%0A%20%20%F0%9F%91%86%20Use%20the%20toggle%20above%20to%20add%20the%20plugin.%0A%3C%2Fblockquote%3E%0A%0A%23%23%20Components%0A%0AYou%20can%20pass%20components%20to%20change%20things%3A%0A%0A%60%60%60js%0Aimport%20React%20from%20%27react%27%0Aimport%20ReactDOM%20from%20%27react-dom%27%0Aimport%20Markdown%20from%20%27react-markdown%27%0Aimport%20MyFancyRule%20from%20%27.%2Fcomponents%2Fmy-fancy-rule.js%27%0A%0Aconst%20markdown%20%3D%20%60%0A%23%20Your%20markdown%20here%0A%60%0A%0AReactDOM.render(%0A%20%20%3CMarkdown%0A%20%20%20%20components%3D%7B%7B%0A%20%20%20%20%20%20%2F%2F%20Use%20h2s%20instead%20of%20h1s%0A%20%20%20%20%20%20h1%3A%20%27h2%27%2C%0A%20%20%20%20%20%20%2F%2F%20Use%20a%20component%20instead%20of%20hrs%0A%20%20%20%20%20%20hr(props)%20%7B%0A%20%20%20%20%20%20%20%20const%20%7Bnode%2C%20...rest%7D%20%3D%20props%0A%20%20%20%20%20%20%20%20return%20%3CMyFancyRule%20%7B...rest%7D%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%7D%0A%20%20%3E%0A%20%20%20%20%7Bmarkdown%7D%0A%20%20%3C%2FMarkdown%3E%2C%0A%20%20document.querySelector(%27%23content%27)%0A)%0A%60%60%60%0A%0A%23%23%20More%20info%3F%0A%0AMuch%20more%20info%20is%20available%20in%20the%0A%5Breadme%20on%20GitHub%5D(https%3A%2F%2Fgithub.com%2Fremarkjs%2Freact-markdown)!%0A%0A***%0A%0AA%20component%20by%20%5BEspen%20Hovlandsdal%5D(https%3A%2F%2Fespen.codes%2F)%0A`

  const md = decodeURIComponent(mdEnc)

  if (isEncoded) {
    content = decodeURIComponent(content);
  }

  return (
    <Markdown className={`markdown-render ${className}`}
      remarkPlugins={[remarkGfm, remarkToc]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
    >
      {md}
    </Markdown>
  );
}
