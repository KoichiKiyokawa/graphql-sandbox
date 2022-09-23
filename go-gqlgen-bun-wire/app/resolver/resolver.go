package resolver

import (
	"go-gqlgen-bun-wire/app/service"
)

//go:generate go run github.com/99designs/gqlgen generate

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	articleService service.ArticleService
}

func NewResolver(articleService service.ArticleService) *Resolver {
	return &Resolver{articleService: articleService}
}
