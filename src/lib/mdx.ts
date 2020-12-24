import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();
const dataPath = 'src/data';

type types = 'blog';
export const getFiles = async (type: types): Promise<string[]> => {
  return fs.readdirSync(path.join(root, dataPath, type));
};

export const getSource = async (type: types, slug: string): Promise<string> => {
  return fs.readFileSync(path.join(root, dataPath, type, slug), 'utf8');
};

// TODO: Proper types
export const getFilesWithFrontMatter: any = async (type: types) => {
  const files = await getFiles(type);

  return files.reduce(async (allPosts: Promise<any>, slug) => {
    const source = await getSource(type, slug);
    const { data } = matter(source);

    return Promise.resolve([
      ...(await allPosts),
      { ...data, slug: slug.replace('.mdx', '') }
    ]);
  }, Promise.resolve([]));
};
