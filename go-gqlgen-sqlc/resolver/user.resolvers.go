package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
	"go-gqlgen-sqlc/graphql/scalar"
	"go-gqlgen-sqlc/loader"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input *db.CreateUserParams) (*db.User, error) {
	return r.queries.CreateUser(ctx, input)
}

// UpdateUser is the resolver for the updateUser field.
func (r *mutationResolver) UpdateUser(ctx context.Context, input *db.UpdateUserParams) (*db.User, error) {
	return r.queries.UpdateUser(ctx, input)
}

// User is the resolver for the user field.
func (r *queryResolver) User(ctx context.Context, id scalar.UUID) (*db.User, error) {
	return r.queries.GetUser(ctx, id)
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*db.User, error) {
	return r.queries.GetUsers(ctx)
}

// Posts is the resolver for the posts field.
func (r *userResolver) Posts(ctx context.Context, obj *db.User) ([]*db.Post, error) {
	return loader.For(ctx).PostsByUserID.Load(ctx, obj.ID)()
}

// PostCount is the resolver for the postCount field.
func (r *userResolver) PostCount(ctx context.Context, obj *db.User) (int, error) {
	return loader.For(ctx).PostCountByUserID.Load(ctx, obj.ID)()
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
