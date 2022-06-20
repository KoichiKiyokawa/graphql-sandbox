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

// Loaders wrap your data loaders to inject via middleware
type Loaders struct {
	StatusLoader *dataloader.Loader[int, []*model.Status]
}

// NewLoaders instantiates data loaders for the middleware
func NewLoaders(db *gorm.DB) *Loaders {
	// define the data loader
	statusReader := &StatusReader{db: db}
	loaders := &Loaders{
		StatusLoader: dataloader.NewBatchedLoader(statusReader.GetStatusesByAccountIDs),
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
