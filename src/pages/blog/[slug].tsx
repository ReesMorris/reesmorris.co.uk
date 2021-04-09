// import React from 'react';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import hydrate from 'next-mdx-remote/hydrate';
// import { IDataItem } from '../../models/data-item';
// import { getFilesByType, getFile } from '../../lib/mdx';
// import Page from '../../components/page';
// import Wrapper from '../../components/wrapper';
// import Heading from '../../components/heading';
// import mdxComponents from '../../components/mdx-components';
// import MDXProvider from '../../components/mdx-provider';
// import SEO from '../../seo';

// interface BlogPostProps {
//   post: IDataItem;
// }

// const BlogPost = ({ post }: BlogPostProps) => {
//   const content = hydrate(post.mdxSource, { components: mdxComponents });

//   return (
//     <Page>
//       <SEO
//         title={post.frontMatter.title}
//         description={post.frontMatter.summary}
//         canonical={`https://reesmorris.co.uk/blog/${post.frontMatter.slug}`}
//         type='article'
//         publishedTime={post.frontMatter.date}
//         emoji='📝'
//       />
//       <Wrapper>
//         <article>
//           <Heading>{post.frontMatter.title}</Heading>
//           <MDXProvider>{content}</MDXProvider>
//         </article>
//       </Wrapper>
//     </Page>
//   );
// };

// export default BlogPost;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await getFilesByType('blog');
//   return {
//     paths: paths.map(p => ({ params: { slug: p.replace(/\.mdx/, '') } })),
//     fallback: false
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const post = await getFile('blog', `${params?.slug}.mdx`);
//   return { props: { post } };
// };
