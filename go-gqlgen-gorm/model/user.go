package model

import (
	"github.com/google/uuid"
)

type User struct {
	ID    uuid.UUID
	Name  string
	Email string
	// MEMO: これがあると、articles フィールドのresolverが生成されない
	// Articles []Article
}
