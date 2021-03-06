package loader

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/graphql/scalar"
	"net/http"

	"github.com/graph-gophers/dataloader/v7"
)

var loadersKey = struct{}{}

type loaders struct {
	PostsByUserID     *dataloader.Loader[scalar.UUID, []*db.Post]
	PostCountByUserID *dataloader.Loader[scalar.UUID, int]
}

func NewLoaders(queries *db.Queries) *loaders {
	pr := &postReader{queries}
	return &loaders{
		PostsByUserID:     dataloader.NewBatchedLoader(pr.PostsByUserID),
		PostCountByUserID: dataloader.NewBatchedLoader(pr.PostCountByUserID),
	}
}

func Middleware(loaders *loaders, next http.Handler) http.Handler {
	// return a middleware that injects the loader to the request context
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		nextCtx := context.WithValue(r.Context(), loadersKey, loaders)
		r = r.WithContext(nextCtx)
		next.ServeHTTP(w, r)
	})
}

func For(ctx context.Context) *loaders {
	return ctx.Value(loadersKey).(*loaders)
}
