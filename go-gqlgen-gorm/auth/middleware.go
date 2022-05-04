package auth

import (
	"context"
	"net/http"
)

const sessionServiceContextKey = "sessionServiceContextKey"

// sessionを使うためには、http.RequestResolver が必要になる。
// しかし、Resolver では contextしか使えない。
// そのため、session 操作をラップした sessionService を context に入れる。

func Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		sessionStore := getSessionStore()
		sess, err := sessionStore.Get(r, userIdSessionKey)
		// Allow unauthenticated users in
		if err != nil {
			next.ServeHTTP(w, r)
			return
		}

		// put it in context
		ctx := context.WithValue(r.Context(), sessionServiceContextKey, &SessionService{session: sess, w: w, r: r})

		// and call the next with our new context
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	})
}

func GetSessionServiceForContext(ctx context.Context) *SessionService {
	return ctx.Value(sessionServiceContextKey).(*SessionService)
}
