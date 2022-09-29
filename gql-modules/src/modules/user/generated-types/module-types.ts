import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'email' | 'name' | 'bio' | 'image' | 'articles';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type Article = Types.Article;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  
  export interface Resolvers {
    User?: UserResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      email?: gm.Middleware[];
      name?: gm.Middleware[];
      bio?: gm.Middleware[];
      image?: gm.Middleware[];
      articles?: gm.Middleware[];
    };
  };
}