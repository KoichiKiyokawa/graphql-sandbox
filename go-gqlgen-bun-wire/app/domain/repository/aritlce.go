package repository

import (
	"context"
	"go-gqlgen-bun-wire/generated"
)

type ArticleRepository interface {
	FindAll(ctx context.Context) ([]*generated.Article, error)
	FindById(ctx context.Context, id string) (*generated.Article, error)
}
