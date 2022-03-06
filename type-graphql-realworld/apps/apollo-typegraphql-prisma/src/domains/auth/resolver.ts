import { User } from "@generated/type-graphql"
import bcrypt from "bcryptjs"
import createHttpError from "http-errors"
import {
  Args,
  ArgsType,
  Authorized,
  Ctx,
  Field,
  Mutation,
  Query,
  Resolver,
} from "type-graphql"
import { Context } from "../../types/context"
import { prisma } from "../core/db"

@ArgsType()
class LoginInput {
  @Field()
  email!: string

  @Field()
  password!: string
}

@Resolver()
export class AuthResolver {
  @Mutation(() => User)
  async login(@Args() { email, password }: LoginInput, @Ctx() ctx: Context) {
    const targetUser = await prisma.user.findUnique({ where: { email } })
    if (
      !targetUser ||
      !bcrypt.compareSync(password, targetUser.passwordHash ?? "")
    ) {
      throw new createHttpError.Unauthorized()
    }

    if (!ctx.req.session) throw new createHttpError.InternalServerError()
    ctx.req.session.userId = targetUser.id

    return targetUser
  }

  @Mutation(() => Boolean)
  @Authorized()
  async logout(@Ctx() ctx: Context) {
    ctx.req.session = null
    return true
  }

  @Query(() => User)
  @Authorized()
  async me(@Ctx() ctx: Context) {
    const user = await prisma.user.findUnique({
      where: { id: ctx.req.session?.userId ?? undefined },
    })
    if (!user) {
      throw new createHttpError.Unauthorized()
    }

    return user
  }
}
