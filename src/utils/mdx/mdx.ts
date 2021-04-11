import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { MdxRemote } from 'next-mdx-remote/types';
import renderToString from 'next-mdx-remote/render-to-string';
import components from './components';

const root = process.cwd();
const dataPath = 'src/data';
type Type = 'blog';

export interface IFileMetadata {
  title: string;
  summary: string;
  slug: string;
  date: string;
}
export interface IFile {
  metadata: IFileMetadata;
  source: MdxRemote.Source | null;
}

// Returns file names in directory
export const getFilesInDirectory = async (type: Type) => {
  return fs.readdirSync(path.join(root, dataPath, type));
};

// Returns the contents of a file
const getFileContent = async (type: Type, slug: string) => {
  return fs.readFileSync(path.join(root, dataPath, type, slug), 'utf8');
};

// Returns a single file from directory
export const getFile = async (
  type: Type,
  slug: string,
  withSource?: boolean
): Promise<IFile> => {
  const fileContent = await getFileContent(type, slug);
  const { content, data } = matter(fileContent);

  // Convert the `content` into an mdxSource
  const source = withSource
    ? await renderToString(content, {
        components,
        mdxOptions: {
          remarkPlugins: [require('remark-slug')],
          rehypePlugins: [mdxPrism]
        }
      })
    : null;

  // Return the File
  return {
    source,
    metadata: {
      ...data,
      slug: slug.replace('.mdx', '')
    } as IFileMetadata
  };
};

// Returns files from directory
export const getFiles = async (type: Type): Promise<IFile[]> => {
  const files = await getFilesInDirectory(type);

  return await files.reduce(async (acc: Promise<IFile[]>, curr) => {
    const metadata = await getFile(type, curr, false);
    return [...(await acc), { ...metadata }];
  }, Promise.resolve([]));
};
