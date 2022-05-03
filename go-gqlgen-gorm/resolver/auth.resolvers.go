package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm/auth"
	"go-gqlgen-gorm/model"
)

func (r *queryResolver) Login(ctx context.Context, email string, password string) (*model.Result, error) {
	sessionService := auth.GetSessionServiceForContext(ctx)

	var user *model.User
	// TODO: bcryptなどを使う
	r.DB.Where("email = ? AND password_hash = ?", email, password).Find(&user)
	sessionService.SetCurrentUserId(user.ID.String())
	return &model.Result{Message: "ok"}, nil
}

func (r *queryResolver) Logout(ctx context.Context) (*model.Result, error) {
	sessionService := auth.GetSessionServiceForContext(ctx)
	sessionService.RemoveCurrentUserId()
	return &model.Result{Message: "ok"}, nil
}
