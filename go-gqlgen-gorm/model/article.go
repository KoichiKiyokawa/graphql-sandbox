package model

import "github.com/google/uuid"

type Article struct {
	BaseModel
	Title string
	Body  string

	User        User
	UserID      uuid.UUID
	LikedUsersF []User `gorm:"many2many:user_liked_articles"`
}
