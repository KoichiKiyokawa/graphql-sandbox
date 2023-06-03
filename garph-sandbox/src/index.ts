import { buildSchema, g } from "garph"
import { createYoga } from "graphql-yoga"
import { createServer } from "http"
import { userResolver } from "./faetures/user/resolver"

const resolvers = [userResolver]

const schema = buildSchema({ g, resolvers: userResolver })
const yoga = createYoga({ schema })
const server = createServer(yoga)
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql")
})
