package loader

import (
	"context"
	"go-gqlgen-gorm-cockroachdb/model"

	"github.com/graph-gophers/dataloader/v7"
	"gorm.io/gorm"
)

type StatusReader struct {
	db *gorm.DB
}

func (s *StatusReader) GetStatusesByAccountIDs(ctx context.Context, keys []int) []*dataloader.Result[[]*model.Status] {
	var statuses []*model.Status
	var results []*dataloader.Result[[]*model.Status]

	if err := s.db.Model(&model.Status{}).Where("account_id IN ?", keys).Order("id DESC").Find(&statuses).Error; err != nil {
		for range keys {
			results = append(results, &dataloader.Result[[]*model.Status]{Data: []*model.Status{}, Error: err})
		}
		return results
	}

	statusesByAccountIdMap := make(map[int][]*model.Status)
	for _, status := range statuses {
		statusesByAccountIdMap[status.AccountID] = append(statusesByAccountIdMap[status.AccountID], status)
	}

	for _, key := range keys {
		results = append(results, &dataloader.Result[[]*model.Status]{Data: statusesByAccountIdMap[key], Error: nil})
	}
	return results
}
