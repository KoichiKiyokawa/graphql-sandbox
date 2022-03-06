import client from "src/plugins/apollo";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  /** The author of the article */
  author: User;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** The description of the article */
  description: Scalars['String'];
  /** The unique slug for the article */
  slug: Scalars['String'];
  /** The title of the article */
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Article>;
};

export type MaybeError = {
  __typename?: 'MaybeError';
  /** Error message */
  error?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<MaybeError>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Article>;
  /** Get the specified user */
  user: User;
  /** Get all users */
  users: Array<User>;
};


export type QueryArticleArgs = {
  slug: Scalars['String'];
};


export type QueryArticlesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  articles?: Maybe<ArticleConnection>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};


export type UserArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', slug: string, title: string, description: string, body: string, author: { __typename?: 'User', id: string, name: string } }> };


export const GetArticlesDoc = gql`
    query GetArticles {
  articles {
    slug
    title
    description
    body
    author {
      id
      name
    }
  }
}
    `;
export const GetArticles = (
            options: Omit<
              WatchQueryOptions<GetArticlesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetArticlesQuery> & {
              query: ObservableQuery<
                GetArticlesQuery,
                GetArticlesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetArticlesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetArticlesQuery> & {
                query: ObservableQuery<
                  GetArticlesQuery,
                  GetArticlesQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        