package graph

func toPointer[T any](v T) *T {
	return &v
}
