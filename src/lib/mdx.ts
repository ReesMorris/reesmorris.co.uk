import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import Heading from '../components/heading';
import { IDataItem } from '../models/data-item';
import { MdxRemote } from 'next-mdx-remote/types';

const root = process.cwd();
const dataPath = 'src/data';

type types = 'blog';
export const getFiles = async (type: types): Promise<string[]> => {
  return fs.readdirSync(path.join(root, dataPath, type));
};

export const getSource = async (type: types, slug: string): Promise<string> => {
  return fs.readFileSync(path.join(root, dataPath, type, slug), 'utf8');
};

export const getFileBySlug = async (
  type: types,
  slug: string
): Promise<IDataItem> => {
  const source = await getSource(type, slug);
  const { data, content } = matter(source);

  const mdxSource: MdxRemote.Source = await renderToString(content, {
    components: { Heading },
    scope: data
  });

  return Promise.resolve({
    mdxSource,
    frontMatter: { slug: slug.replace('.mdx', ''), ...data }
  });
};

// TODO: Proper types
export const getFilesWithFrontMatter: any = async (type: types) => {
  const files = await getFiles(type);

  return files.reduce(async (allPosts: Promise<any>, slug) => {
    const data = await getFileBySlug(type, slug);

    return Promise.resolve([...(await allPosts), { ...data.frontMatter }]);
  }, Promise.resolve([]));
};
