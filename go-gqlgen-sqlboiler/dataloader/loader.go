//go:generate go run github.com/vektah/dataloaden UserLoader string *go-gqlgen-sqlboiler/models.User
package dataloader

import (
	"context"
	"database/sql"
	"go-gqlgen-sqlboiler/models"
	"net/http"
	"time"

	"github.com/samber/lo"
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

					ids := lo.Map(keys, func(key string, _ int) interface{} {
						return key
					})

					users, err := models.Users(qm.WhereIn(models.UserColumns.ID+" in ?", ids...), sortByKeysAsOrder(keys, models.UserColumns.ID)).All(ctx, db)
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
