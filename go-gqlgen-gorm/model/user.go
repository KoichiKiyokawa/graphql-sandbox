package model

import (
	"github.com/google/uuid"
)

type User struct {
	ID           uuid.UUID
	Name         string
	Email        string
	PasswordHash string
	// MEMO: これがあると、articles フィールドのresolverが生成されない。↑のNameとかEmailとかのフィールドに対してresolverが生成されないのと同じ理由
	// Articles []Article

	// 末尾にFをつけることで、GraphQLのフィールド名と不一致にして、resolverを自動生成してもらう。なお先頭を小文字にしてprivateにするのは、migrateの対象外になってしまうので却下。
	LikedArticlesF []Article `gorm:"many2many:user_liked_articles"`
}
