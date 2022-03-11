//go:generate go run github.com/vektah/dataloaden UserLoader string *go-gqlgen-sqlboiler/models.User
package dataloader

import (
	"context"
	"database/sql"
	"go-gqlgen-sqlboiler/models"
	"net/http"

	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

type loaders struct {
	UserById UserLoader
}

const key = "loader"

func Middleware(db *sql.DB, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := context.WithValue(r.Context(), key, &loaders{
			UserById: UserLoader{
				fetch: func(keys []string) ([]*models.User, []error) {
					users, err := models.Users(qm.WhereIn("id in ?", keys)).All(r.Context(), db)
					return users, []error{err}
				},
			},
		})
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	})
}

func For(ctx context.Context) *loaders {
	return ctx.Value(key).(*loaders)
}
