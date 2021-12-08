export interface MDXMetadata {
  title: string;
  summary: string;
  slug: string;
  date: string;
}
export interface MDXFile {
  metadata: MDXMetadata;
  body: string | null;
}
