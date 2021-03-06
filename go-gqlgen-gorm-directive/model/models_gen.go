// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"time"
)

type Post struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	User      *User     `json:"user"`
	UserID    int       `json:"userID"`
	Tags      []*Tag    `json:"tags" gorm:"many2many:post_tag"`
}

type Tag struct {
	ID    int     `json:"id"`
	Name  string  `json:"name"`
	Posts []*Post `json:"posts" gorm:"many2many:post_tag"`
}

type User struct {
	ID       int     `json:"id"`
	Name     string  `json:"name"`
	Email    string  `json:"email"`
	Password string  `json:"password"`
	Posts    []*Post `json:"posts"`
}
