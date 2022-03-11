package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-sqlboiler/graph/generated"
	"go-gqlgen-sqlboiler/models"
)

func (r *queryResolver) User(ctx context.Context, id string) (*models.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Users(ctx context.Context) ([]*models.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *userResolver) Articles(ctx context.Context, obj *models.User, after *string, before *string, first *int, last *int) (*models.ArticleConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
