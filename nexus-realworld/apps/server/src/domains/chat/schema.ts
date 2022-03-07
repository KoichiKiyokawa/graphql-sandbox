import {
  inputObjectType,
  mutationType,
  nonNull,
  objectType,
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

export const CreateMessageInput = inputObjectType({
  name: "CreateMessageInput",
  definition(t) {
    t.nonNull.id("toUserId");
    t.nonNull.string("text");
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.nonNull.field("addMessage", {
      type: Message,
      args: {
        message: nonNull(CreateMessageInput),
      },
      async resolve(_root, args, ctx) {
        const currentUser = await ctx.getCurrentUser();
        const created = await ctx.db.message.create({
          data: { ...args.message, fromUserId: currentUser.id },
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
      subscribe: (_root, _args, ctx) => {
        return ctx.pubsub.asyncIterator(PUBSUB_KEYS.MESSAGE_ADDED);
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      resolve: (event) => event,
    });
  },
});
