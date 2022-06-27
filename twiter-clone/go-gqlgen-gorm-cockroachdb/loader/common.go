package loader

// import graph gophers with your other imports
import (
	"context"
	"go-gqlgen-gorm-cockroachdb/model"
	"net/http"

	"github.com/graph-gophers/dataloader/v7"
	"gorm.io/gorm"
)

var loadersKey = struct{}{}

type reader struct {
	db *gorm.DB
}

// Loaders wrap your data loaders to inject via middleware
type Loaders struct {
	StatusesLoader   *dataloader.Loader[int, []*model.Status]
	AccountLoader    *dataloader.Loader[int, *model.Account]
	FollowersLoader  *dataloader.Loader[int, []*model.Account]
	FollowingsLoader *dataloader.Loader[int, []*model.Account]
}

// NewLoaders instantiates data loaders for the middleware
func NewLoaders(db *gorm.DB) *Loaders {
	// define the data loader
	r := &reader{db: db}
	loaders := &Loaders{
		StatusesLoader:   dataloader.NewBatchedLoader(r.GetStatusesByAccountIDs),
		AccountLoader:    dataloader.NewBatchedLoader(r.GetAccountByStatusIDs),
		FollowersLoader:  dataloader.NewBatchedLoader(r.GetFollowersByAccountIDs),
		FollowingsLoader: dataloader.NewBatchedLoader(r.GetFollowingsByAccountIDs),
	}
	return loaders
}

// Middleware injects data loaders into the context
func Middleware(loaders *Loaders) func(next http.Handler) http.Handler {
	// return a middleware that injects the loader to the request context
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			nextCtx := context.WithValue(r.Context(), loadersKey, loaders)
			r = r.WithContext(nextCtx)
			next.ServeHTTP(w, r)
		})
	}
}

// For returns the dataloader for a given context
func For(ctx context.Context) *Loaders {
	return ctx.Value(loadersKey).(*Loaders)
}
