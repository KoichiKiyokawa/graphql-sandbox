//go:build ignore
// +build ignore

package main

import (
	"fmt"
	"go-gqlgen-gorm/model"

	"github.com/google/uuid"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var Models = []interface{}{"1"}

var db, err = gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})

func main() {
	reset()
	db.AutoMigrate(&model.User{}, &model.Article{})
	seed()
}

func reset() {
	db.Exec("DROP TABLE IF EXISTS users")
	db.Exec("DROP TABLE IF EXISTS articles")
}

func seed() {
	for userIndex := 0; userIndex < 10; userIndex++ {
		user := model.User{
			ID:    getUUID(),
			Name:  fmt.Sprintf("user%d", userIndex),
			Email: fmt.Sprintf("user%d@example.com", userIndex),
		}
		db.Create(&user)

		var articles []model.Article
		for articleIndex := 0; articleIndex < 10; articleIndex++ {
			articles = append(articles, model.Article{
				BaseModel: model.BaseModel{
					ID: getUUID(),
				},
				Title:  fmt.Sprintf("user%d-title%d", userIndex, articleIndex),
				Body:   fmt.Sprintf("user%d-body%d", userIndex, articleIndex),
				UserID: user.ID,
			})
		}
		db.Create(&articles)
	}
}

func getUUID() uuid.UUID {
	id, _ := uuid.NewUUID()
	return id
}
