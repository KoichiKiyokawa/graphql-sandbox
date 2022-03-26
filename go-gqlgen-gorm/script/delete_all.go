//go:build ignore
// +build ignore

package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db, _ = gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})

func main() {
	db.Exec("DROP TABLE IF EXISTS users")
	db.Exec("DROP TABLE IF EXISTS articles")
	db.Exec("DROP TABLE IF EXISTS user_liked_articles")
}
