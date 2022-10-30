package service

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/model"
	"go-gqlgen-bun-wire/app/domain/repository"
)

type ArticleService interface {
	FindAll(ctx context.Context) ([]*model.Article, error)
	FindBySlug(ctx context.Context, slug string) (*model.Article, error)
}

type article struct {
	articleRepo repository.ArticleRepository
}

func NewArticle(articleRepo repository.ArticleRepository) ArticleService {
	return &article{articleRepo: articleRepo}
}

// FindAll implements ArticleService
func (a *article) FindAll(ctx context.Context) ([]*model.Article, error) {
	return a.articleRepo.FindAll(ctx)
}

// FindById implements ArticleService
func (a *article) FindBySlug(ctx context.Context, slug string) (*model.Article, error) {
	return a.articleRepo.FindBySlug(ctx, model.ArticleSlug(slug))
}
