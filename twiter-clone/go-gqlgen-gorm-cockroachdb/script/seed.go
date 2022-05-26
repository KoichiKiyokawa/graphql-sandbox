//go:build ignore
// +build ignore

package main

import (
	"fmt"
	"go-gqlgen-gorm-cockroachdb/model"
	"log"
	"os"

	_ "github.com/joho/godotenv/autoload"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	// account x 10
	for i := 1; i <= 10; i++ {
		account := model.Account{ID: i, Username: fmt.Sprintf("user%d", i)}
		account.SetPassword("password")
		db.Create(&account)
	}
}
