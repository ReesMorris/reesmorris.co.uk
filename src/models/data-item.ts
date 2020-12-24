import { MdxRemote } from 'next-mdx-remote/types';
import { IFrontMatter } from './front-matter';

export interface IDataItem {
  mdxSource: MdxRemote.Source;
  frontMatter: IFrontMatter;
}
