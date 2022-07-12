package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
	"strconv"
	"time"
)

// CreatePost is the resolver for the createPost field.
func (r *mutationResolver) CreatePost(ctx context.Context, input *db.CreatePostParams) (*db.Post, error) {
	return r.queries.CreatePost(ctx, input)
}

// ConnectTag is the resolver for the connectTag field.
func (r *mutationResolver) ConnectTag(ctx context.Context, postID string, tagID string) (*generated.MessageResponse, error) {
	err := r.queries.ConnectTagToPost(ctx, &db.ConnectTagToPostParams{
		// TODO: sql側でuuidを使うようにする
		PostID: int64(must(strconv.Atoi(postID))),
		TagID:  int64(must(strconv.Atoi(tagID))),
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
	panic(fmt.Errorf("not implemented"))
}

// Posts is the resolver for the posts field.
func (r *queryResolver) Posts(ctx context.Context) ([]*db.Post, error) {
	return r.queries.GetAllPosts(ctx)
}

// Post returns generated.PostResolver implementation.
func (r *Resolver) Post() generated.PostResolver { return &postResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type postResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
