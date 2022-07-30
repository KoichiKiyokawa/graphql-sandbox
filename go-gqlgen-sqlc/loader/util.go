package loader

import (
	"github.com/graph-gophers/dataloader/v7"
)

type dataloaderBuilder[K comparable, I any, V any] struct {
	keys         []K
	itemsFetcher func() ([]I, error)
	itemToKey    func(item I) K
	itemToValue  func(item I) V
}

func (d *dataloaderBuilder[K, I, V]) sortTo1d() []*dataloader.Result[V] {
	items, err := d.itemsFetcher()
	keyLength := len(d.keys)
	result := make([]*dataloader.Result[V], keyLength)
	if err != nil {
		for i := 0; i < keyLength; i++ {
			result[i] = &dataloader.Result[V]{Error: err}
		}
		return result
	}

	keyToIndex := map[K]int{}
	for i, key := range d.keys {
		keyToIndex[key] = i
	}

	for _, item := range items {
		i := keyToIndex[d.itemToKey(item)]
		result[i].Data = d.itemToValue(item)
	}
	return result
}

func (d *dataloaderBuilder[K, I, V]) sortTo2d() []*dataloader.Result[[]V] {
	items, err := d.itemsFetcher()
	keyLength := len(d.keys)
	result := make([]*dataloader.Result[[]V], keyLength)
	if err != nil {
		for i := 0; i < keyLength; i++ {
			result[i] = &dataloader.Result[[]V]{Error: err}
		}
		return result
	}

	keyToIndex := map[K]int{}
	for i, key := range d.keys {
		keyToIndex[key] = i
	}

	for _, item := range items {
		i := keyToIndex[d.itemToKey(item)]
		if result[i] == nil {
			result[i] = &dataloader.Result[[]V]{Data: []V{}}
		}
		result[i].Data = append(result[i].Data, d.itemToValue(item))
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
