package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"errors"
	"go-gqlgen-gorm/auth"
	"go-gqlgen-gorm/model"

	"github.com/vektah/gqlparser/v2/gqlerror"
	"gorm.io/gorm"
)

func (r *queryResolver) Login(ctx context.Context, email string, password string) (*model.Result, error) {
	var user *model.User
	// TODO: bcryptなどを使う
	err := r.DB.Where("email = ? AND password_hash = ?", email, password).First(&user).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, gqlerror.Errorf("invalid email or password")
	}
	if err != nil {
		return nil, gqlerror.Errorf("")
	}

	if err := auth.GetSessionServiceForContext(ctx).SetCurrentUserId(user.ID.String()); err != nil {
		return nil, gqlerror.Errorf("")
	}

	return &model.Result{Message: "ok"}, nil
}

func (r *queryResolver) Logout(ctx context.Context) (*model.Result, error) {
	if err := auth.GetSessionServiceForContext(ctx).RemoveCurrentUserId(); err != nil {
		return nil, gqlerror.Errorf("")
	}

	return &model.Result{Message: "ok"}, nil
}
