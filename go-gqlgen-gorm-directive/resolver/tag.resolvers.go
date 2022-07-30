package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm-directive/generated"
	"go-gqlgen-gorm-directive/model"
)

// Posts is the resolver for the posts field.
func (r *tagResolver) Posts(ctx context.Context, obj *model.Tag) ([]*model.Post, error) {
	var posts []*model.Post
	err := r.db.Model(&model.Tag{ID: obj.ID}).Association("Posts").Find(&posts)
	return posts, err
}

// Tag returns generated.TagResolver implementation.
func (r *Resolver) Tag() generated.TagResolver { return &tagResolver{r} }

type tagResolver struct{ *Resolver }
