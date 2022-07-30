package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm-directive/generated"
	"go-gqlgen-gorm-directive/model"
)

// Tags is the resolver for the tags field.
func (r *postResolver) Tags(ctx context.Context, obj *model.Post) ([]*model.Tag, error) {
	var tags []*model.Tag
	err := r.db.Model(&model.Post{ID: obj.ID}).Association("Tags").Find(&tags)
	return tags, err
}

// Posts is the resolver for the posts field.
func (r *queryResolver) Posts(ctx context.Context) ([]*model.Post, error) {
	var posts []*model.Post
	res := r.db.Find(&posts)
	return posts, res.Error
}

// Post is the resolver for the post field.
func (r *queryResolver) Post(ctx context.Context, id int) (*model.Post, error) {
	var post *model.Post
	res := r.db.First(&post, id)
	return post, res.Error
}

// Post returns generated.PostResolver implementation.
func (r *Resolver) Post() generated.PostResolver { return &postResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type postResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
