import { ServiceContext } from "../core/service";

export async function getCurrentUser(ctx: ServiceContext) {
  const sessionCookie = await ctx.request.cookieStore?.get("session");
  if (sessionCookie === undefined) return null;

  const session = await ctx.db.session.findUnique({
    where: { token: sessionCookie.value, expiresAt: { gt: new Date() } },
    include: { user: true },
  });
  if (session === null) return null;

  return session.user;
}
