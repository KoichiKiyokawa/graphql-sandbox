import "./features/post/schema/mutation";
import "./features/post/schema/query";
import "./features/user/schema/mutation";
import "./features/user/schema/query";
import { builder } from "./lib/builder";

builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema();
