import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace ArticleModule {
  interface DefinedFields {
    Article: 'slug' | 'title' | 'description' | 'body' | 'tagList' | 'author';
    Tag: 'id' | 'name';
    Query: 'article' | 'articles';
  };
  
  export type Article = Pick<Types.Article, DefinedFields['Article']>;
  export type Tag = Pick<Types.Tag, DefinedFields['Tag']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type User = Types.User;
  
  export type ArticleResolvers = Pick<Types.ArticleResolvers, DefinedFields['Article'] | '__isTypeOf'>;
  export type TagResolvers = Pick<Types.TagResolvers, DefinedFields['Tag'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Article?: ArticleResolvers;
    Tag?: TagResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Article?: {
      '*'?: gm.Middleware[];
      slug?: gm.Middleware[];
      title?: gm.Middleware[];
      description?: gm.Middleware[];
      body?: gm.Middleware[];
      tagList?: gm.Middleware[];
      author?: gm.Middleware[];
    };
    Tag?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      article?: gm.Middleware[];
      articles?: gm.Middleware[];
    };
  };
}