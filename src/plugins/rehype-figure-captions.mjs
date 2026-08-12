/**
 * Turn a standalone Markdown image into semantic figure markup.
 *
 * `![Pressure vessel section](/images/vessel.png)` becomes a <figure> with
 * the alt text repeated as its visible caption. Images embedded inside links
 * or prose are intentionally left untouched.
 */
export default function rehypeFigureCaptions({ basePath = '' } = {}) {
  return (tree) => {
    visit(tree);
  };

  function visit(node) {
    if (!node?.children) return;

    node.children = node.children.map((child) => {
      if (
        child.type === 'element' &&
        child.tagName === 'p' &&
        child.children?.length === 1 &&
        child.children[0]?.type === 'element' &&
        child.children[0]?.tagName === 'img'
      ) {
        const image = child.children[0];
        const caption = String(image.properties?.alt ?? 'Technical figure');

        // Absolute Markdown image paths are author-friendly (`/images/x.png`).
        // Prefix them only at render time for GitHub project pages.
        const source = String(image.properties?.src ?? '');
        const normalizedBase = basePath === '/' ? '' : basePath.replace(/\/$/, '');
        if (source.startsWith('/') && normalizedBase && !source.startsWith(`${normalizedBase}/`)) {
          image.properties.src = `${normalizedBase}${source}`;
        }

        return {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['technical-figure'] },
          children: [
            image,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: [{ type: 'text', value: caption }],
            },
          ],
        };
      }

      visit(child);
      return child;
    });
  }
}
