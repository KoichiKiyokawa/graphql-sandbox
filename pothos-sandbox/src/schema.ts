import.meta.glob("./features/**/schema/{query,mutation,subscription}.ts", { eager: true });
import { builder } from "./lib/builder";

builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema();
