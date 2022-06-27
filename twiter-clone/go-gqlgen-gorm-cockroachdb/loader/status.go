package loader

import (
	"context"
	"go-gqlgen-gorm-cockroachdb/model"
	"go-gqlgen-gorm-cockroachdb/util"

	"github.com/graph-gophers/dataloader/v7"
)

func (r *reader) GetStatusesByAccountIDs(ctx context.Context, keys []int) []*dataloader.Result[[]*model.Status] {
	var statuses []*model.Status
	results := make([]*dataloader.Result[[]*model.Status], len(keys))

	if err := r.db.Model(&model.Status{}).Where("account_id IN ?", keys).Order("id DESC").Find(&statuses).Error; err != nil {
		for i := range keys {
			results[i] = &dataloader.Result[[]*model.Status]{Data: []*model.Status{}, Error: err}
		}
		return results
	}

	cachedKeys := util.NewCachedSlice(keys)
	for _, status := range statuses {
		index := cachedKeys.IndexOf(status.AccountID)
		if results[index] == nil {
			results[index] = &dataloader.Result[[]*model.Status]{Data: []*model.Status{}, Error: nil}
		}
		results[index].Data = append(results[index].Data, status)
	}

	return results
}
