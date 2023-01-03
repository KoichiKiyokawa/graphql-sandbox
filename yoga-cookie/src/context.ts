import cookie from "cookie"
import cookieSignature from "cookie-signature"
import type { YogaInitialContext } from "graphql-yoga"

const SECRET = "secret"

export function createContext(ctx: YogaInitialContext) {
  return {
    getCurrentUserId() {
      const rawCookieValue = cookie.parse(
        ctx.request.headers.get("cookie") || ""
      )
      const cookieValue = cookieSignature.unsign(
        rawCookieValue["x-user-id"] || "",
        SECRET
      )
      if (!cookieValue) return null

      return cookieValue
    },
    setCurrentUserId(userId: string | null) {
      const cookieValue = cookieSignature.sign(userId || "", SECRET)
      const serialized = cookie.serialize("x-user-id", cookieValue, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        ...(userId === null && { expires: new Date(0) }),
      })
      ;(ctx as any).res.setHeader("Set-Cookie", serialized)
    },
  }
}

export type Context = ReturnType<typeof createContext>
