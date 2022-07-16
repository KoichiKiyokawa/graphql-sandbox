//go:build seed
// +build seed

package main

import (
	"context"
	"database/sql"
	"fmt"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/graphql/scalar"
	"log"
	"os"

	"github.com/google/uuid"
	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	database, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatal(err)
	}

	q := db.New(database)
	ctx := context.Background()

	for u := 0; u < 10; u++ {
		user, err := q.CreateUser(ctx, &db.CreateUserParams{
			ID:           scalar.UUID{UUID: uuid.New()},
			Name:         fmt.Sprintf("user%d", u),
			Email:        fmt.Sprintf("user%d@example.com", u),
			PasswordHash: hash("password"),
		})
		if err != nil {
			log.Fatal(err)
		}

		for p := 0; p < 100; p++ {
			_, err = q.CreatePost(ctx, &db.CreatePostParams{
				ID:     scalar.UUID{UUID: uuid.New()},
				UserID: user.ID,
				Title:  fmt.Sprintf("user%d-title%d", u, p),
				Body:   fmt.Sprintf("user%d-body%d", u, p),
			})
			if err != nil {
				log.Fatal(err)
			}
		}
	}
}

func hash(password string) string {
	h, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(h)
}
