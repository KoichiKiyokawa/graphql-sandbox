//go:generate go run github.com/vektah/dataloaden UserLoader string *go-gqlgen-sqlboiler/models.User
package dataloader

import (
	"context"
	"database/sql"
	"go-gqlgen-sqlboiler/models"
	"net/http"
	"time"

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
				wait: 10 * time.Millisecond,
				fetch: func(keys []string) ([]*models.User, []error) {
					if len(keys) == 0 {
						return nil, nil
					}

					var ids []interface{}
					for _, key := range keys {
						ids = append(ids, key)
					}

					rows, err := models.Users(qm.WhereIn(models.UserColumns.ID+" in ?", ids...)).All(ctx, db)
					var users []*models.User
					for _, key := range keys {
						for _, row := range rows {
							if row.ID == key {
								users = append(users, row)
							}
						}
					}
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
