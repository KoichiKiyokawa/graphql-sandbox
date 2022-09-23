package dao

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/repository"
	"go-gqlgen-bun-wire/app/infra/model"
	"go-gqlgen-bun-wire/generated"

	"github.com/uptrace/bun"
)

type article struct {
	db *bun.DB
}

func NewArticle(db *bun.DB) repository.ArticleRepository {
	return &article{db: db}
}

// FindAll implements repository.ArticleRepository
func (a *article) FindAll(ctx context.Context) ([]*generated.Article, error) {
	var articles []*model.Article
	err := a.db.NewSelect().Model(articles).Scan(ctx)
	result := make([]*generated.Article, len(articles))
	for i, article := range articles {
		result[i] = convertModel(article)
	}
	return result, err
}

// FindById implements repository.ArticleRepository
func (a *article) FindById(ctx context.Context, id string) (*generated.Article, error) {
	article := &model.Article{ID: id}
	err := a.db.NewSelect().Model(article).WherePK().Scan(ctx)
	return convertModel(article), err
}

func convertModel(article *model.Article) *generated.Article {
	return &generated.Article{
		ID:          article.ID,
		Title:       article.Title,
		Description: article.Description,
		Body:        article.Body,
	}
}
