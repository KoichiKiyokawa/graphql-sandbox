package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/generated"
)

func (r *articleResolver) ID(ctx context.Context, obj *ent.Article) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *articleResolver) CreatedAt(ctx context.Context, obj *ent.Article) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *articleResolver) UpdatedAt(ctx context.Context, obj *ent.Article) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *articleResolver) User(ctx context.Context, obj *ent.Article) (*ent.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Article(ctx context.Context, id string) (*ent.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Articles(ctx context.Context) ([]*ent.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type articleResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
