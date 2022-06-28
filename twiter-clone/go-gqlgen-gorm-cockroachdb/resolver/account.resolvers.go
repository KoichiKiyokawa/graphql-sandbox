package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-gorm-cockroachdb/auth"
	"go-gqlgen-gorm-cockroachdb/graph/generated"
	"go-gqlgen-gorm-cockroachdb/loader"
	"go-gqlgen-gorm-cockroachdb/model"
	"time"
)

func (r *accountResolver) FollowersCount(ctx context.Context, obj *model.Account) (int, error) {
	count := r.db.Model(&model.Account{ID: obj.ID}).Association("FollowersRelation").Count()
	return int(count), nil
}

func (r *accountResolver) FollowingCount(ctx context.Context, obj *model.Account) (int, error) {
	count := r.db.Model(&model.Account{ID: obj.ID}).Association("FollowingsRelation").Count()
	return int(count), nil
}

func (r *accountResolver) Statuses(ctx context.Context, obj *model.Account) ([]*model.Status, error) {
	statuses, err := loader.For(ctx).StatusesLoader.Load(ctx, obj.ID)()
	if err != nil {
		return nil, err
	}

	return statuses, nil
}

func (r *accountResolver) Followers(ctx context.Context, obj *model.Account) ([]*model.Account, error) {
	return loader.For(ctx).FollowersLoader.Load(ctx, obj.ID)()
}

func (r *accountResolver) Followings(ctx context.Context, obj *model.Account) ([]*model.Account, error) {
	return loader.For(ctx).FollowingsLoader.Load(ctx, obj.ID)()
}

func (r *mutationResolver) CreateAccount(ctx context.Context, username string, password string) (*model.Account, error) {
	account := &model.Account{Username: username}
	account.SetPassword(password)
	if err := r.db.Model(&model.Account{}).Create(account).Error; err != nil {
		return nil, err
	}

	return r.Query().Account(ctx, username)
}

func (r *mutationResolver) UpdateCredentials(ctx context.Context, id int, input generated.UpdateCredentialsInput) (*model.Account, error) {
	if input.Avatar != nil {
		path, err := r.uploadService.UploadFile(*input.Avatar, fmt.Sprintf("avatar/%d.png", time.Now().Unix()))
		if err != nil {
			return nil, err
		}
		input.Avatar = &path
	}

	if input.Header != nil {
		path, err := r.uploadService.UploadFile(*input.Header, fmt.Sprintf("header/%d.png", time.Now().Unix()))
		if err != nil {
			return nil, err
		}
		input.Header = &path
	}

	if err := r.db.Model(&model.Account{ID: id}).Updates(input).Error; err != nil {
		return nil, err
	}

	var updatedAccount model.Account
	if err := r.db.Model(&model.Account{ID: id}).First(updatedAccount).Error; err != nil {
		return nil, err
	}
	return &updatedAccount, nil
}

func (r *mutationResolver) FollowSpecificAccount(ctx context.Context, targetAccountID int) (*generated.RelationResult, error) {
	currentUserID := auth.AccountOf(ctx).ID
	if err := r.db.Model(&model.Account{ID: currentUserID}).Association("FollowingsRelation").Append(&model.Account{ID: targetAccountID}); err != nil {
		return nil, err
	}

	return r.getRelation(currentUserID, targetAccountID)
}

func (r *mutationResolver) UnfollowSpecificAccount(ctx context.Context, targetAccountID int) (*generated.RelationResult, error) {
	currentUser := auth.AccountOf(ctx)
	if err := r.db.Model(&model.Account{ID: currentUser.ID}).Association("FollowingsRelation").Delete(&model.Account{ID: targetAccountID}); err != nil {
		return nil, err
	}
	return r.getRelation(currentUser.ID, targetAccountID)
}

func (r *queryResolver) Account(ctx context.Context, username string) (*model.Account, error) {
	var account model.Account
	if err := r.db.Model(&model.Account{}).Where("username = ?", username).First(&account).Error; err != nil {
		return nil, err
	}

	return &account, nil
}

func (r *queryResolver) Accounts(ctx context.Context) ([]*model.Account, error) {
	var accounts []*model.Account
	if err := r.db.Model(&model.Account{}).Find(&accounts).Error; err != nil {
		return nil, err
	}
	return accounts, nil
}

func (r *queryResolver) GetRelationships(ctx context.Context, usernames []string) ([]*generated.RelationResult, error) {
	currentUser := auth.AccountOf(ctx)
	var relationResults []*generated.RelationResult
	if err := r.db.Raw(`
		SELECT
			target_user_ids.id AS "id",
			(SELECT count(*) > 0 FROM relationship WHERE from_id = @current_user AND to_id = target_user_ids.id) AS "following",
			(SELECT count(*) > 0 FROM relationship WHERE from_id = target_user_ids.id AND to_id = @current_user) AS "followedBy"
		FROM
			(SELECT id FROM accounts WHERE username IN @usernames) AS "target_user_ids";
	`, map[string]any{"current_user": currentUser.ID, "usernames": usernames}).Scan(&relationResults).Error; err != nil {
		return nil, err
	}
	return relationResults, nil
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
