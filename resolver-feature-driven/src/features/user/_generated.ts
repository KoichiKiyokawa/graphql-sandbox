import type * as Types from "../_generated";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'name' | 'email' | 'posts';
    Query: 'users' | 'user';
    Mutation: 'createUser';
  };
  
  interface DefinedInputFields {
    CreateUserInput: 'name' | 'email';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type Post = Types.Post;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type CreateUserInput = Pick<Types.CreateUserInput, DefinedInputFields['CreateUserInput']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
}