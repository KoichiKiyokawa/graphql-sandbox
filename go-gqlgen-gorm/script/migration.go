//go:build ignore
// +build ignore

package main

import (
	"go-gqlgen-gorm/model"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db.AutoMigrate(&model.User{}, &model.Article{})
}
