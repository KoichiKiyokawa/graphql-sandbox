package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-ent/generated"
	"go-gqlgen-ent/model"
)

func (r *queryResolver) Article(ctx context.Context, id string) (*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Articles(ctx context.Context) ([]*model.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
