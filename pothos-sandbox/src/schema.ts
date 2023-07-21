import exp from "constants";
import "./features/post/mutation";
import "./features/post/query";
import "./features/user/mutation";
import "./features/user/query";
import { builder } from "./lib/builder";

builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema();
