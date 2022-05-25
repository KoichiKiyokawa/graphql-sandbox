//go:build ignore
// +build ignore

package main

import (
	"context"
	"fmt"
	"go-gqlgen-gorm-cockroachdb/resolver"
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

	r := resolver.NewResolver(db)

	// account x 10
	for i := 0; i < 10; i++ {
		_, err := r.Mutation().CreateAccount(context.Background(), fmt.Sprintf("user%d", i), "password")
		if err != nil {
			log.Fatal(err)
		}
	}
}
