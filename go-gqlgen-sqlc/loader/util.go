package loader

import (
	"github.com/graph-gophers/dataloader/v7"
)

func sortItemsAsKeysOrder1d[K comparable, I any, V any](keys []K, items []I, itemToKey func(item I) K, itemToValue func(item I) V) []*dataloader.Result[V] {
	keyToIndex := map[K]int{}
	for i, key := range keys {
		keyToIndex[key] = i
	}

	result := make([]*dataloader.Result[V], len(keys))
	for _, item := range items {
		i := keyToIndex[itemToKey(item)]
		result[i].Data = itemToValue(item)
	}
	return result
}

func sortItemsAsKeysOrder2d[K comparable, T any](keys []K, items []T, itemToKey func(item T) K) []*dataloader.Result[[]T] {
	keyToIndex := map[K]int{}
	for i, key := range keys {
		keyToIndex[key] = i
	}

	result := make([]*dataloader.Result[[]T], len(keys))
	for _, item := range items {
		i := keyToIndex[itemToKey(item)]
		if result[i] == nil {
			result[i] = &dataloader.Result[[]T]{Data: []T{}}
		}
		result[i].Data = append(result[i].Data, item)
	}
	return result
}

func fillError[T any](err error, length int) []*dataloader.Result[T] {
	result := make([]*dataloader.Result[T], length)
	for i := 0; i < length; i++ {
		result[i] = &dataloader.Result[T]{Error: err}
	}
	return result
}
