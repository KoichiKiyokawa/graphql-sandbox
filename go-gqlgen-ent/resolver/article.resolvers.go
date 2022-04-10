package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/generated"

	"github.com/google/uuid"
)

func (r *articleResolver) ID(ctx context.Context, obj *ent.Article) (string, error) {
	return obj.ID.String(), nil
}

func (r *articleResolver) CreatedAt(ctx context.Context, obj *ent.Article) (string, error) {
	return obj.CreatedAt.String(), nil
}

func (r *articleResolver) UpdatedAt(ctx context.Context, obj *ent.Article) (string, error) {
	return obj.UpdatedAt.String(), nil
}

func (r *queryResolver) Article(ctx context.Context, id string) (*ent.Article, error) {
	return r.Client.Article.Get(ctx, uuid.MustParse(id))
}

func (r *queryResolver) Articles(ctx context.Context) ([]*ent.Article, error) {
	return r.Client.Article.Query().All(ctx)
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type articleResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
