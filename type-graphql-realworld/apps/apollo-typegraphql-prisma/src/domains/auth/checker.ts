import { AuthChecker } from "type-graphql"
import { Context } from "../../types/context"

export const customAuthChecker: AuthChecker<Context> = ({ context }) => {
  return !!context.req.session?.userId
}
