package dao

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/model"
	"go-gqlgen-bun-wire/app/domain/repository"
	"go-gqlgen-bun-wire/app/infra/db"

	"github.com/uptrace/bun"
)

type article struct {
	db *bun.DB
}

func NewArticle(db *bun.DB) repository.ArticleRepository {
	return &article{db: db}
}

// FindAll implements repository.ArticleRepository
func (a *article) FindAll(ctx context.Context) ([]*model.Article, error) {
	var articles []*db.Article
	err := a.db.NewSelect().Model(&articles).Scan(ctx)
	result := make([]*model.Article, len(articles))
	for i, article := range articles {
		result[i] = article.ConvertToModel()
	}
	return result, err
}

// FindById implements repository.ArticleRepository
func (a *article) FindBySlug(ctx context.Context, slug string) (*model.Article, error) {
	article := &db.Article{Slug: slug}
	err := a.db.NewSelect().Model(article).WherePK().Scan(ctx)
	return article.ConvertToModel(), err
}
