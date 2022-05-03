package auth

import (
	"context"
	"net/http"
)

const userIdSessionKey = "userId"
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

		sessionService := &SessionService{
			GetCurrentUserId: func() string {
				userID := sess.Values[userIdSessionKey]
				return userID.(string)
			},
			SetCurrentUserId: func(userId string) {
				sess.Values[userIdSessionKey] = userId
				if err := sess.Save(r, w); err != nil {
					http.Error(w, err.Error(), http.StatusInternalServerError)
				}
			},
			RemoveCurrentUserId: func() {
				delete(sess.Values, userIdSessionKey)
				if err := sess.Save(r, w); err != nil {
					http.Error(w, err.Error(), http.StatusInternalServerError)
				}
			},
		}

		// put it in context
		ctx := context.WithValue(r.Context(), sessionServiceContextKey, sessionService)

		// and call the next with our new context
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	})
}

func GetSessionServiceForContext(ctx context.Context) *SessionService {
	return ctx.Value(sessionServiceContextKey).(*SessionService)
}
