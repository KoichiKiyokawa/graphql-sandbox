package resolver

// 第一引数がnilであれば、第二引数の値を返す。
func coalesce[T any](nilable *T, def T) T {
	if nilable == nil {
		return def
	}
	return *nilable
}
