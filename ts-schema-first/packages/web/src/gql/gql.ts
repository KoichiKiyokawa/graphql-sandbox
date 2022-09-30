/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetUsers {\n    users {\n      id\n      email\n    }\n  }\n": types.GetUsersDocument,
};

export function gql(source: "\n  query GetUsers {\n    users {\n      id\n      email\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      email\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;