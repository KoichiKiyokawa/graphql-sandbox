import { db } from "../lib/db";

/** @gqlType */
export type Query = unknown;

export type GqlContext = {
  db: typeof db;
};
