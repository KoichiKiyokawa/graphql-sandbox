package loader

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/model"
	"net/http"

	"github.com/graph-gophers/dataloader/v7"
	"github.com/uptrace/bun"
)

type ctxKey string

const (
	loadersKey = ctxKey("dataloaders")
)

// Loaders wrap your data Loaders to inject via middleware
type Loaders struct {
	AuthorByArticleSlugLoader *dataloader.Loader[model.ArticleSlug, *model.User]
}

// NewLoaders instantiates data loaders for the middleware
func NewLoaders(db *bun.DB) *Loaders {
	// define the data loader
	userReader := &UserReader{db: db}
	return &Loaders{
		AuthorByArticleSlugLoader: dataloader.NewBatchedLoader(userReader.AuthorByArticleSlugLoader),
	}
}

// Middleware injects data loaders into the context
func Middleware(loaders *Loaders, next http.Handler) http.Handler {
	// return a middleware that injects the loader to the request context
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		nextCtx := context.WithValue(r.Context(), loadersKey, loaders)
		r = r.WithContext(nextCtx)
		next.ServeHTTP(w, r)
	})
}

// For returns the dataloader for a given context
func For(ctx context.Context) *Loaders {
	return ctx.Value(loadersKey).(*Loaders)
}
