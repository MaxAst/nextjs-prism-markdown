import matter from 'gray-matter';
import Layout from '~/components/Layout';
import markdownToHtml from '~/lib/markdown';

export default function Doc({ meta, markup }) {
  return <Layout meta={meta}>{markup}</Layout>;
}

export async function getStaticProps() {
  const res = await fetch(
    'https://raw.githubusercontent.com/MaxAst/nextjs-prism-markdown/master/README.md'
  );
  const fileContents = await res.text();
  const { data, content } = matter(fileContents);

  const markup = await markdownToHtml(content || '');

  return {
    props: {
      markup,
      meta: data
    },
    revalidate: 30
  };
}
