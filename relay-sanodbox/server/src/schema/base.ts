import { idArg, interfaceType, queryType } from "nexus";

export const Node = interfaceType({
  name: "Node",
  definition(t) {
    t.id("id", { description: "GUID for a resource" });
  },
  resolveType(data) {
    return data.name as any;
  },
});

export const Query = queryType({
  definition(t) {
    t.field("node", {
      type: Node,
      args: {
        id: idArg(),
      },
      resolve(_root, { id }) {
        return { id: id ?? "", name: "" };
      },
    });
  },
});
