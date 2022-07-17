package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-ent/auth"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/ent/user"
	"go-gqlgen-ent/generated"

	"golang.org/x/crypto/bcrypt"
)

func (r *mutationResolver) SignUp(ctx context.Context, email string, password string) (*ent.User, error) {
	hashed, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	user, err := r.client.User.Create().SetEmail(email).SetPasswordHash(string(hashed)).Save(ctx)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (r *mutationResolver) Login(ctx context.Context, email string, password string) (*ent.User, error) {
	targetUser, err := r.client.User.Query().Where(user.EmailEQ(email), user.PasswordHashEQ(password)).Only(ctx)
	if err != nil {
		return nil, err
	}
	if targetUser == nil {
		return nil, fmt.Errorf("invalid email or password")
	}

	err = auth.GetSessionServiceForContext(ctx).SetCurrentUserId(targetUser.ID)
	if err != nil {
		return nil, err
	}

	return targetUser, nil
}

func (r *mutationResolver) Logout(ctx context.Context) (bool, error) {
	if err := auth.GetSessionServiceForContext(ctx).RemoveCurrentUserId(); err != nil {
		return false, err
	}
	return true, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
