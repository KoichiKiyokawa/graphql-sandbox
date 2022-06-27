package loader

import (
	"context"
	"go-gqlgen-gorm-cockroachdb/model"
	"go-gqlgen-gorm-cockroachdb/util"
	"log"

	"github.com/graph-gophers/dataloader/v7"
)

func (r reader) GetFollowersByAccountIDs(ctx context.Context, keys []int) []*dataloader.Result[[]*model.Account] {
	var followers []*model.Account
	results := make([]*dataloader.Result[[]*model.Account], len(keys))
	if err := r.db.Model(&model.Account{}).Where("id IN ?", keys).Order("id ASC").Association("FollowersRelation").Find(&followers); err != nil {
		for i := range keys {
			results[i] = &dataloader.Result[[]*model.Account]{Data: []*model.Account{}, Error: err}
		}
		return results
	}

	cachedKeys := util.NewCachedSlice(keys)
	for _, follower := range followers {
		index := cachedKeys.IndexOf(follower.ID)
		if results[index] == nil {
			results[index] = &dataloader.Result[[]*model.Account]{Data: []*model.Account{}}
		}
		results[index].Data = append(results[index].Data, follower)
	}

	return results
}

func (r reader) GetFollowingsByAccountIDs(ctx context.Context, keys []int) []*dataloader.Result[[]*model.Account] {
	var followings []*model.Account
	results := make([]*dataloader.Result[[]*model.Account], len(keys))
	if err := r.db.Model(&model.Account{}).Where("id IN ?", keys).Order("id ASC").Association("FollowingsRelation").Find(&followings); err != nil {
		for i := range keys {
			results[i] = &dataloader.Result[[]*model.Account]{Data: []*model.Account{}, Error: err}
		}
		return results
	}

	cachedKeys := util.NewCachedSlice(keys)
	for _, follower := range followings {
		index := cachedKeys.IndexOf(follower.ID)
		if results[index] == nil {
			results[index] = &dataloader.Result[[]*model.Account]{Data: []*model.Account{}}
		}
		results[index].Data = append(results[index].Data, follower)
	}

	return results
}

func (r reader) GetAccountByStatusIDs(ctx context.Context, keys []int) []*dataloader.Result[*model.Account] {
	var statuses []*model.Status
	results := make([]*dataloader.Result[*model.Account], len(keys))
	if err := r.db.Model(&model.Status{}).Where("statuses.id IN ?", keys).Joins("AccountRelation").Find(&statuses).Error; err != nil {
		for i := range keys {
			results[i] = &dataloader.Result[*model.Account]{Data: nil, Error: err}
		}
		return results
	}

	log.Printf("statuses[0]: %#+v\n", statuses[0])

	cachedKeys := util.NewCachedSlice(keys)
	for _, status := range statuses {
		index := cachedKeys.IndexOf(status.ID)
		results[index] = &dataloader.Result[*model.Account]{Data: &status.AccountRelation, Error: nil}
	}

	return results
}
