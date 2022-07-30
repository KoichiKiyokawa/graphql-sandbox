//go:build ignore
// +build ignore

package main

import (
	"fmt"
	"go-gqlgen-gorm-directive/model"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	for u := 1; u <= 10; u++ {
		user := &model.User{
			Name:     fmt.Sprintf("user%d", u),
			Email:    fmt.Sprintf("user%d@example.com", u),
			Password: "password",
		}
		db.Create(&user)

		for p := 1; p <= 10; p++ {
			db.Create(&model.Post{
				Title:   fmt.Sprintf("title%d", p),
				Content: fmt.Sprintf("content%d", p),
				UserID:  user.ID,
			})
		}
	}
}
