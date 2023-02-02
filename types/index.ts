export * from "./state";

export interface BlogRaw {
  [lang: string]: ArticleRaw[];
}


export interface ArticleRaw {
  slug: string;
  date: string;
  path: string;
}

export interface ArticleData {
  attributes: Article;
  body: object;
  html: string;
}

export interface Article {
  slug: string;
  date: Date;
  title: string;
  author?: string;
  description: string;
  image: string;
  categories?: string[];
  tags?: string[];
}
