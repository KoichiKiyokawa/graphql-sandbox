import {
  idArg,
  mutationType,
  nonNull,
  objectType,
  stringArg,
  subscriptionType,
} from "nexus";
import { PUBSUB_KEYS } from "../core/contants";

export const Message = objectType({
  name: "Message",
  description: "A message between two users.",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("text");
    t.nonNull.field("from", { type: "User" });
    t.nonNull.field("to", { type: "User" });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.nonNull.field("addMessage", {
      type: Message,
      args: {
        toUserId: nonNull(idArg()),
        text: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        const currentUser = await ctx.getCurrentUser();
        const created = await ctx.db.message.create({
          data: { ...args, fromUserId: currentUser.id },
          include: { from: true, to: true },
        });
        ctx.pubsub.publish(PUBSUB_KEYS.MESSAGE_ADDED, created);
        return created;
      },
    });
  },
});

export const Subscription = subscriptionType({
  definition(t) {
    t.nonNull.field("messageAdded", {
      type: Message,
      subscribe: (_root, _args, ctx) =>
        ctx.pubsub.asyncIterator(PUBSUB_KEYS.MESSAGE_ADDED),
      resolve: (event) => event as any,
    });
  },
});
