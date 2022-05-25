package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-gorm-cockroachdb/auth"
	"go-gqlgen-gorm-cockroachdb/graph/generated"
	"go-gqlgen-gorm-cockroachdb/model"
)

func (r *accountResolver) FollowersCount(ctx context.Context, obj *model.Account) (int, error) {
	count := r.db.Model(&model.Account{}).Where("id = ?", obj.ID).Association("FollowersRelation").Count()
	return int(count), nil
}

func (r *accountResolver) FollowingCount(ctx context.Context, obj *model.Account) (int, error) {
	count := r.db.Model(&model.Account{}).Where("id = ?", obj.ID).Association("FollowingsRelation").Count()
	return int(count), nil
}

func (r *accountResolver) Followers(ctx context.Context, obj *model.Account) ([]*model.Account, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *accountResolver) Followings(ctx context.Context, obj *model.Account) ([]*model.Account, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) CreateAccount(ctx context.Context, username string, password string) (*model.Account, error) {
	account := &model.Account{Username: username}
	account.SetPassword(password)
	if err := r.db.Model(&model.Account{}).Create(account).Error; err != nil {
		return nil, err
	}

	return r.Query().GetAccount(ctx, username)
}

func (r *mutationResolver) UpdateCredentials(ctx context.Context, id string, input generated.UpdateCredentialsInput) (*model.Account, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) FollowSpecificAccount(ctx context.Context, targetAccountID string) (*generated.RelationResult, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) GetAccount(ctx context.Context, username string) (*model.Account, error) {
	var account model.Account
	if err := r.db.Model(&model.Account{}).Where("username = ?", username).First(&account).Error; err != nil {
		return nil, err
	}

	return &account, nil
}

func (r *queryResolver) Me(ctx context.Context) (*model.Account, error) {
	return auth.AccountOf(ctx), nil
}

// Account returns generated.AccountResolver implementation.
func (r *Resolver) Account() generated.AccountResolver { return &accountResolver{r} }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type accountResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
