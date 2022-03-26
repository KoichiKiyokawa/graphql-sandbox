package dataloader

import (
	"context"
	"net/http"

	"gorm.io/gorm"
)

const loadersKey = "dataloaders"

type Loaders struct {
	ArticlesByUserIDs      ArticlesLoader
	LikedArticlesByUserIDs ArticlesLoader
}

func Middleware(db *gorm.DB, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := context.WithValue(r.Context(), loadersKey, &Loaders{
			ArticlesByUserIDs:      articlesByUserIDs(db),
			LikedArticlesByUserIDs: likedArticlesByUserIDs(db),
		})
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	})
}

func For(ctx context.Context) *Loaders {
	return ctx.Value(loadersKey).(*Loaders)
}
