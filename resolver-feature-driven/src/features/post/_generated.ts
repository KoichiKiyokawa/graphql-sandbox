import type * as Types from "../_generated";
export namespace PostModule {
  interface DefinedFields {
    Post: 'id' | 'title' | 'content' | 'published' | 'author';
  };
  
  export type Post = Pick<Types.Post, DefinedFields['Post']>;
  export type User = Types.User;
  
  export type PostResolvers = Pick<Types.PostResolvers, DefinedFields['Post'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Post?: PostResolvers;
  };
}