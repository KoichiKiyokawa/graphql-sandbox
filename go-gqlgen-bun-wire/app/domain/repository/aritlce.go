package repository

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/model"
)

type ArticleRepository interface {
	FindAll(ctx context.Context) ([]*model.Article, error)
	FindBySlug(ctx context.Context, slug model.ArticleSlug) (*model.Article, error)
}
