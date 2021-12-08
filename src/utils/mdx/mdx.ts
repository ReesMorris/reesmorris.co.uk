import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { MDXFile, MDXMetadata } from './types';

const root = process.cwd();
const dataPath = 'src/data';
type Type = 'blog';

// Returns file names from a directory
export const getFilesInDirectory = async (type: Type) => {
  return fs.readdirSync(path.join(root, dataPath, type));
};

// Returns the contents of a file
const getFileContent = async (type: Type, slug: string) => {
  return fs.readFileSync(path.join(root, dataPath, type, slug), 'utf8');
};

// Returns a single file from a directory
export const getFile = async (
  type: Type,
  slug: string,
  withBody = false
): Promise<MDXFile> => {
  const fileContent = await getFileContent(type, slug);
  const { content, data } = matter(fileContent);

  let body = null;
  if (withBody) {
    const { value } = await remark().process(content);
    body = value.toString();
  }

  return {
    body,
    metadata: {
      ...data,
      slug: slug.replace('.mdx', '')
    } as MDXMetadata
  };
};

// Returns files from directory
export const getFiles = async (type: Type): Promise<MDXFile[]> => {
  const files = await getFilesInDirectory(type);

  return await files.reduce(async (acc: Promise<MDXFile[]>, curr) => {
    const metadata = await getFile(type, curr, false);
    return [...(await acc), { ...metadata }];
  }, Promise.resolve([]));
};
