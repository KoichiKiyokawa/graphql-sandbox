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
		ctx := r.Context()
		ctx = context.WithValue(ctx, key, &loaders{
			UserById: UserLoader{
				fetch: func(keys []string) ([]*models.User, []error) {
					if len(keys) == 0 {
						return nil, nil
					}

					var ids []interface{}
					for _, key := range keys {
						ids = append(ids, key)
					}

					users, err := models.Users(qm.WhereIn(models.UserColumns.ID+" in ?", ids...)).All(ctx, db)
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
