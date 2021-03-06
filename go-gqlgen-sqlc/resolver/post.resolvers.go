package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
	"go-gqlgen-sqlc/graphql/scalar"
	"time"
)

// CreatePost is the resolver for the createPost field.
func (r *mutationResolver) CreatePost(ctx context.Context, input *db.CreatePostParams) (*db.Post, error) {
	return r.queries.CreatePost(ctx, input)
}

// ConnectTag is the resolver for the connectTag field.
func (r *mutationResolver) ConnectTag(ctx context.Context, postID scalar.UUID, tagID scalar.UUID) (*generated.MessageResponse, error) {
	err := r.queries.ConnectTagToPost(ctx, &db.ConnectTagToPostParams{
		PostID: postID,
		TagID:  tagID,
	})
	if err != nil {
		return nil, err
	}
	return &generated.MessageResponse{Message: "ok"}, nil
}

// CreatedAt is the resolver for the createdAt field.
func (r *postResolver) CreatedAt(ctx context.Context, obj *db.Post) (*time.Time, error) {
	return &obj.CreatedAt.Time, nil
}

// UpdatedAt is the resolver for the updatedAt field.
func (r *postResolver) UpdatedAt(ctx context.Context, obj *db.Post) (*time.Time, error) {
	return &obj.UpdatedAt.Time, nil
}

// Tags is the resolver for the tags field.
func (r *postResolver) Tags(ctx context.Context, obj *db.Post) ([]*db.Tag, error) {
	return r.queries.GetTagsByPostId(ctx, obj.ID)
}

// Posts is the resolver for the posts field.
func (r *queryResolver) Posts(ctx context.Context, limit *int) ([]*db.Post, error) {
	return r.queries.GetAllPosts(ctx, int32(coalesce(limit, 100)))
}

// Post returns generated.PostResolver implementation.
func (r *Resolver) Post() generated.PostResolver { return &postResolver{r} }

type postResolver struct{ *Resolver }
