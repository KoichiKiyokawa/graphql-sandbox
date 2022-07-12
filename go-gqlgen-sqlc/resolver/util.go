package resolver

func must[T any](v T, err error) T {
	return v
}
