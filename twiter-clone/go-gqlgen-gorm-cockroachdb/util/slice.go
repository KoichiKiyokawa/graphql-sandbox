package util

// IndexOfの結果がキャッシュされるSlice
type cachedSlice[T comparable] struct {
	slice      []T
	indexCache map[T]int
}

func NewCachedSlice[T comparable](slice []T) *cachedSlice[T] {
	return &cachedSlice[T]{
		slice:      slice,
		indexCache: make(map[T]int),
	}
}

func (c *cachedSlice[T]) IndexOf(value T) int {
	cache, ok := c.indexCache[value]
	if ok {
		return cache
	}

	for i, v := range c.slice {
		if v == value {
			c.indexCache[v] = i
			return i
		}
	}

	return -1
}
