package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input *db.CreateUserParams) (*db.User, error) {
	return r.queries.CreateUser(ctx, input)
}

// UpdateUser is the resolver for the updateUser field.
func (r *mutationResolver) UpdateUser(ctx context.Context, input *db.UpdateUserParams) (*db.User, error) {
	return r.queries.UpdateUser(ctx, input)
}

// Posts is the resolver for the posts field.
func (r *userResolver) Posts(ctx context.Context, obj *db.User) ([]*db.Post, error) {
	return r.queries.GetPostByUserId(ctx, obj.ID)
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type mutationResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
