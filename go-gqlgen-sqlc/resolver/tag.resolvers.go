package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
)

// CreateTag is the resolver for the createTag field.
func (r *mutationResolver) CreateTag(ctx context.Context, text string) (*db.Tag, error) {
	return r.queries.CreateTag(ctx, text)
}

// Posts is the resolver for the posts field.
func (r *tagResolver) Posts(ctx context.Context, obj *db.Tag) ([]*db.Post, error) {
	return r.queries.GetPostsByTagId(ctx, obj.ID)
}

// Tag returns generated.TagResolver implementation.
func (r *Resolver) Tag() generated.TagResolver { return &tagResolver{r} }

type tagResolver struct{ *Resolver }
