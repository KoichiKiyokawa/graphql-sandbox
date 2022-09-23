package service

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/repository"
	"go-gqlgen-bun-wire/generated"
)

type ArticleService interface {
	FindAll(ctx context.Context) ([]*generated.Article, error)
	FindById(ctx context.Context, id string) (*generated.Article, error)
}

type article struct {
	articleRepo repository.ArticleRepository
}

func NewArticle(articleRepo repository.ArticleRepository) ArticleService {
	return &article{articleRepo: articleRepo}
}

// FindAll implements ArticleService
func (a *article) FindAll(ctx context.Context) ([]*generated.Article, error) {
	return a.articleRepo.FindAll(ctx)
}

// FindById implements ArticleService
func (a *article) FindById(ctx context.Context, id string) (*generated.Article, error) {
	return a.articleRepo.FindById(ctx, id)
}
