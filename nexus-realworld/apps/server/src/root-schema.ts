import { connectionPlugin, makeSchema } from "nexus";
import { resolve } from "path";
import * as ArticleTypes from "./domains/article/schema";
import * as AuthTypes from "./domains/auth/schema";
import * as CoreTypes from "./domains/core/schema";
import * as UserTypes from "./domains/user/schema";
import * as Scalars from "./domains/core/scalar";
import * as MessageTypes from "./domains/chat/schema";

export const schema = makeSchema({
  types: [UserTypes, ArticleTypes, AuthTypes, CoreTypes, MessageTypes, Scalars],
  contextType: { module: resolve("src/context.ts"), export: "Context" },
  outputs: {
    schema: resolve("src/generated/schema.graphql"),
    typegen: resolve("src/generated/nexus.ts"),
  },
  plugins: [connectionPlugin()],
});
