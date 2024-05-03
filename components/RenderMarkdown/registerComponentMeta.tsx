import { CodeComponentMeta } from "@plasmicapp/host";
import { RenderMarkdownProps } from ".";

export const renderMarkdownMeta: CodeComponentMeta<RenderMarkdownProps> = {
  name: "RenderMarkdown",
  importPath: "./index",
  props: {
    markdownText: {
      type: "string",
      description: 'Markdown content to render. Note: it is also OK to pass URI encoded markdown content here if needed.',
      defaultValue: '# Hello, this is a H1!'
    },
    dangerouslyRenderHtmlTags: {
      type: "boolean",
      description: 'Whether to (DANGEROUSLY) render HTML tags in the markdown content. If true, HTML tags will be rendered as HTML elements. Only use if you are sanitizing input before render, or you completely trust the source of the markdown. Can be used to for XSS attacks and other terrible things.',
      defaultValue: false
    },
    className: {
      type: "class",
      selectors: [
        { selector: ":component h1", label: "h1" },
        { selector: ":component h2", label: "h2" },
        { selector: ":component h3", label: "h3" },
        { selector: ":component h4", label: "h4" },
        { selector: ":component p", label: "p" },
        { selector: ":component ul", label: "ul" },
        { selector: ":component ol", label: "ol" },
        { selector: ":component li", label: "li" },
        { selector: ":component pre", label: "pre" },
        { selector: ":component code", label: "code" },
        { selector: ":component a", label: "a" },
        { selector: ":component: table", label: "table" },
        { selector: ":component thead", label: "thead" },
        { selector: ":component tbody", label: "tbody" },
        { selector: ":component tr", label: "tr" },
        { selector: ":component th", label: "th" },
        { selector: ":component td", label: "td" },
      ],
    },
  },
};
