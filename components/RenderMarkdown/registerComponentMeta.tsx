import { CodeComponentMeta } from "@plasmicapp/host";
import { RenderMarkdownProps } from ".";

export const renderMarkdownMeta: CodeComponentMeta<RenderMarkdownProps> = {
  name: "RenderMarkdown",
  importPath: "./index",
  props: {
    content: {
      type: "string",
      defaultValue: `
        # Hello this is a heading

        This is a paragraph

        * Bullet list item 1
        * Bullet list item 2
      `,
    },
    isEncoded: {
      type: "boolean",
      defaultValue: false,
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
