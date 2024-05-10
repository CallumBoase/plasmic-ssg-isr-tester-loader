import { visit } from 'unist-util-visit';
import { Node } from 'unist';

interface Element extends Node {
  type: 'element';
  tagName: string;
  properties: Record<string, any>;
  children: Node[];
}

interface Text extends Node {
  type: 'text';
  value: string;  // Ensuring the text node has a 'value' property
}

export function rehypeAddCopyButton() {
  return (tree: Node) => {
    visit(tree, { tagName: 'code' }, (node: Node, index: number, parent: Node | Element) => {
      if (isElement(parent) && typeof index === 'number') {
        const codeElement: Element = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['code-container'] },
          children: [node]
        };

        const buttonElement: Element = {
          type: 'element',
          tagName: 'button',
          properties: {
            className: ['copy-button']
          },
          children: [{ type: 'text', value: 'Copy' } as Text]
        };

        parent.children.splice(index, 1, codeElement);
        codeElement.children.push(buttonElement);
      }
    });
  };
}

function isElement(node: Node): node is Element {
  return 'children' in node;
}
