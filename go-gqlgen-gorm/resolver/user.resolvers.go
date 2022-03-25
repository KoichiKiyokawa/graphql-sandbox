package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm/generated"
	"go-gqlgen-gorm/model"
)

func (r *queryResolver) User(ctx context.Context, id string) (*model.User, error) {
	var user *model.User
	result := r.DB.First(user, id)
	return user, result.Error
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	var users []*model.User
	result := r.DB.Find(users)
	return users, result.Error
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
