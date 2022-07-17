import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: File;
};

export type MessageResponse = {
  __typename?: "MessageResponse";
  message?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Upload a file */
  upload: MessageResponse;
};

export type MutationUploadArgs = {
  file?: InputMaybe<Scalars["Upload"]>;
};

export type Query = {
  __typename?: "Query";
  health: Scalars["String"];
};

export type UploadFileMutationVariables = Exact<{
  file: Scalars["Upload"];
}>;

export type UploadFileMutation = {
  __typename?: "Mutation";
  upload: { __typename?: "MessageResponse"; message?: string | null };
};

export const UploadFileDocument = gql`
  mutation UploadFile($file: Upload!) {
    upload(file: $file) {
      message
    }
  }
`;

export function useUploadFileMutation() {
  return Urql.useMutation<UploadFileMutation, UploadFileMutationVariables>(
    UploadFileDocument
  );
}
