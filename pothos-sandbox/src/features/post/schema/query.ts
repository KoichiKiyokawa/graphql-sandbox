import { builder } from '@/lib/builder'
import { Post } from './object'
import { User } from '@/features/user/schema/object'

// Query resolver
builder.queryField('posts', (t) =>
  t.field({
    type: [Post],
    description: 'get all posts',
    async resolve(_parent, _args, ctx) {
      return await ctx.db.post.findMany()
    },
  }),
)

// Field Resolver
builder.objectField(Post, 'author', (t) =>
  t.field({
    type: User,
    description: 'get an author of this post',
    async resolve(parent, _args, ctx) {
      const author = await ctx.db.post.findUniqueOrThrow({ where: { id: String(parent.id) } }).author()
      if (author == null) throw new Error('author not found')

      return author
    },
  }),
)
