package auth

import (
	"context"
	"go-gqlgen-gorm-cockroachdb/model"
	"net/http"
	"strings"

	"gorm.io/gorm"
)

var contextKey = &struct{}{}

func Middleware(db *gorm.DB) func(next http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			authHeader := r.Header.Get("Authorization")
			segments := strings.Split(authHeader, " ")
			token := segments[1]

			var currentUser model.Account
			if err := db.Where("username = ?", token).First(&currentUser).Error; err != nil {
				next.ServeHTTP(w, r)
				return
			}

			// put it in context
			ctx := context.WithValue(r.Context(), contextKey, &currentUser)

			// and call the next with our new context
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
		})
	}
}

func AccountOf(ctx context.Context) *model.Account {
	currentUser, ok := ctx.Value(contextKey).(*model.Account)
	if !ok {
		return nil
	}

	return currentUser
}
