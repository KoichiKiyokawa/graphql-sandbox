package util

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCachedSliceOfInt(t *testing.T) {
	cs := NewCachedSlice([]int{1, 2, 3})
	assert.Equal(t, 0, cs.IndexOf(1))
	assert.Equal(t, map[int]int{1: 0}, cs.indexCache)

	assert.Equal(t, 1, cs.IndexOf(2))
	assert.Equal(t, map[int]int{1: 0, 2: 1}, cs.indexCache)

	assert.Equal(t, 2, cs.IndexOf(3), 2)
	assert.Equal(t, map[int]int{1: 0, 2: 1, 3: 2}, cs.indexCache)

	assert.Equal(t, -1, cs.IndexOf(4))
	assert.Equal(t, map[int]int{1: 0, 2: 1, 3: 2}, cs.indexCache)
}

func TestCachedSliceOfString(t *testing.T) {
	cs := NewCachedSlice([]string{"a", "b", "c"})
	assert.Equal(t, 0, cs.IndexOf("a"))
	assert.Equal(t, map[string]int{"a": 0}, cs.indexCache)

	assert.Equal(t, 1, cs.IndexOf("b"))
	assert.Equal(t, map[string]int{"a": 0, "b": 1}, cs.indexCache)

	assert.Equal(t, 2, cs.IndexOf("c"))
	assert.Equal(t, map[string]int{"a": 0, "b": 1, "c": 2}, cs.indexCache)

	assert.Equal(t, -1, cs.IndexOf("d"))
	assert.Equal(t, map[string]int{"a": 0, "b": 1, "c": 2}, cs.indexCache)
}
