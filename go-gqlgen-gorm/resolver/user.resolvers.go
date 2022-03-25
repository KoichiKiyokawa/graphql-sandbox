package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm/generated"
	"go-gqlgen-gorm/model"
)

func (r *queryResolver) User(ctx context.Context, id string) (*model.User, error) {
	var user model.User
	result := r.DB.First(&user, id)
	return &user, result.Error
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	var users []*model.User
	result := r.DB.Find(&users)

	return users, result.Error
}

func (r *userResolver) ID(ctx context.Context, obj *model.User) (string, error) {
	return obj.ID.String(), nil
}

func (r *userResolver) Articles(ctx context.Context, obj *model.User) ([]*model.Article, error) {
	var articles []*model.Article
	result := r.DB.Where("user_id = ?", obj.ID).Find(&articles)
	return articles, result.Error
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
