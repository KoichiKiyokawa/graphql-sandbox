package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-bun-wire/app/domain/model"
	"go-gqlgen-bun-wire/app/infra/loader"
	"go-gqlgen-bun-wire/generated"
)

// Slug is the resolver for the slug field.
func (r *articleResolver) Slug(ctx context.Context, obj *model.Article) (string, error) {
	panic(fmt.Errorf("not implemented: Slug - slug"))
}

// TagList is the resolver for the tagList field.
func (r *articleResolver) TagList(ctx context.Context, obj *model.Article) ([]*generated.Tag, error) {
	panic(fmt.Errorf("not implemented: TagList - tagList"))
}

// Author is the resolver for the author field.
func (r *articleResolver) Author(ctx context.Context, obj *model.Article) (*model.User, error) {
	return loader.For(ctx).AuthorByArticleSlugLoader.Load(ctx, obj.Slug)()
}

// Article is the resolver for the article field.
func (r *queryResolver) Article(ctx context.Context, slug string) (*model.Article, error) {
	return r.articleService.FindBySlug(ctx, slug)
}

// Articles is the resolver for the articles field.
func (r *queryResolver) Articles(ctx context.Context) ([]*model.Article, error) {
	return r.articleService.FindAll(ctx)
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type articleResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
