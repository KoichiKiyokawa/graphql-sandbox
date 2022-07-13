package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
	"go-gqlgen-sqlc/graphql/scalar"
)

// CreateTag is the resolver for the createTag field.
func (r *mutationResolver) CreateTag(ctx context.Context, text string) (*db.Tag, error) {
	return r.queries.CreateTag(ctx, text)
}

// CreateTagAndConnectToPost is the resolver for the createTagAndConnectToPost field.
func (r *mutationResolver) CreateTagAndConnectToPost(ctx context.Context, text string, postID scalar.UUID) (*db.Tag, error) {
	tx, err := r.db.BeginTx(ctx, nil)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback()

	q := db.New(tx)
	tag, err := q.CreateTag(ctx, text)
	if err != nil {
		return nil, err
	}
	q.ConnectTagToPost(ctx, &db.ConnectTagToPostParams{
		TagID:  tag.ID,
		PostID: postID,
	})
	if err := tx.Commit(); err != nil {
		return nil, err
	}
	return tag, nil
}

// Posts is the resolver for the posts field.
func (r *tagResolver) Posts(ctx context.Context, obj *db.Tag) ([]*db.Post, error) {
	return r.queries.GetPostsByTagId(ctx, obj.ID)
}

// Tag returns generated.TagResolver implementation.
func (r *Resolver) Tag() generated.TagResolver { return &tagResolver{r} }

type tagResolver struct{ *Resolver }
