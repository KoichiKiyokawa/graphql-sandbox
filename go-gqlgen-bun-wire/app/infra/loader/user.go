package loader

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/model"
	"go-gqlgen-bun-wire/app/infra/db"

	"github.com/graph-gophers/dataloader/v7"
	"github.com/uptrace/bun"
)

// UserReader reads Users from a database
type UserReader struct {
	db *bun.DB
}

func (u *UserReader) AuthorByArticleSlugLoader(ctx context.Context, slugs []model.ArticleSlug) []*dataloader.Result[*model.User] {
	articles := make([]*db.Article, len(slugs))
	for i, key := range slugs {
		articles[i] = &db.Article{Slug: key}
	}

	u.db.NewSelect().Model(&articles).Relation("User").Scan(ctx)
	slugToAuthor := make(map[model.ArticleSlug]*db.User, len(articles))
	for _, article := range articles {
		slugToAuthor[article.Slug] = &article.User
	}

	result := make([]*dataloader.Result[*model.User], len(slugs))
	for i, key := range slugs {
		result[i] = &dataloader.Result[*model.User]{Data: slugToAuthor[key].ConvertToModel()}
	}
	return result
}
