import { Context } from "@/types/context";
import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";

export const builder = new SchemaBuilder<{
  Context: Context;
}>({
  plugins: [SimpleObjectsPlugin],
});
