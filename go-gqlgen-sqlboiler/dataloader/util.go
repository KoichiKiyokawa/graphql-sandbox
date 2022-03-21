package dataloader

import (
	"github.com/samber/lo"
)

type anyModel struct {
	ID string
}

// Sort by the order of the id corresponding to the key
func sortRowsByKeys[T anyModel](rows []T, keys []string) []T {
	return lo.Map(keys, func(key string, _ int) T {
		correspond, _ := lo.Find(rows, func(row T) bool {
			return row.ID == key
		})
		return correspond
	})
}
