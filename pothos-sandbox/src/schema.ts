import { builder } from './lib/builder'
import.meta.glob('./features/**/schema/{query,mutation,subscription}.ts', { eager: true })

builder.queryType({})
builder.mutationType({})

export const schema = builder.toSchema()
