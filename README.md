# Using Prism with Next.js

Example using Prism / Markdown with Next.js including switching syntax highlighting themes.

- [Next.js](https://nextjs.org/)
- [Prism](https://prismjs.com/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)
- [remark](https://github.com/remarkjs/remark)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/leerob/nextjs-prism-markdown)

### Example code block to test remark-prism

```js
// lib/docs.js

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const docsDirectory = join(process.cwd(), 'docs');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
```
