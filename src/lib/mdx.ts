import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IFrontMatter } from '../models/front-matter';
import { IDataItem } from '../models/data-item';
import { MdxRemote } from 'next-mdx-remote/types';
import renderToString from 'next-mdx-remote/render-to-string';
import remarkSlug from 'remark-slug';
import mdxPrism from 'mdx-prism';
import mdxComponents from '../components/mdx-components';

const root = process.cwd();
const dataPath = 'src/data';
type types = 'blog';

// Returns files from directory
export const getFilesByType = async (type: types): Promise<string[]> => {
  return fs.readdirSync(path.join(root, dataPath, type));
};

// Returns a file by its slug
const getFileBySlug = async (type: types, slug: string): Promise<string> => {
  return fs.readFileSync(path.join(root, dataPath, type, slug), 'utf8');
};

// Returns file FrontMatter and MDX Source
const getFileData = async (file: string, slug: string): Promise<IDataItem> => {
  const { data, content } = matter(file);

  // Pull FrontMatter from `data` field
  const frontMatter: IFrontMatter = {
    title: data.title,
    summary: data.summary,
    slug: slug.replace('.mdx', ''),
    date: data.date || null
  };

  // Format MDXSource
  const mdxSource: MdxRemote.Source = await renderToString(content, {
    components: mdxComponents,
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      rehypePlugins: [mdxPrism]
    }
  });

  return Promise.resolve({ frontMatter, mdxSource });
};

// Returns all files of type
export const getFiles = async (type: types): Promise<IDataItem[]> => {
  const files = await getFilesByType(type);

  return files.reduce(async (allPosts: Promise<IDataItem[]>, slug) => {
    const data = await getFileData(await getFileBySlug(type, slug), slug);

    return Promise.resolve([...(await allPosts), { ...data }]);
  }, Promise.resolve([]));
};

// Returns a single file of type and slug
export const getFile = async (
  type: types,
  slug: string
): Promise<IDataItem> => {
  return await getFileData(await getFileBySlug(type, slug), slug);
};
