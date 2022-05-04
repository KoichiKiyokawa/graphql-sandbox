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
	for userIndex := 0; userIndex < 10; userIndex++ {
		user := model.User{
			ID:           getUUID(),
			Name:         fmt.Sprintf("user%d", userIndex),
			Email:        fmt.Sprintf("user%d@example.com", userIndex),
			PasswordHash: "password",
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

	var firstUser model.User
	var someArticles []model.Article
	db.Where("name = ?", "user0").First(&firstUser)
	db.Where("user_id <> ?", firstUser.ID).Limit(10).Find(&someArticles)
	for _, article := range someArticles {
		db.Table("user_liked_articles").Create(map[string]interface{}{
			"user_id":    firstUser.ID,
			"article_id": article.ID,
		})
	}
}

func getUUID() uuid.UUID {
	id, _ := uuid.NewUUID()
	return id
}
