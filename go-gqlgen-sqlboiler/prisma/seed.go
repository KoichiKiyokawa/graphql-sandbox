package main

import (
	"context"
	"database/sql"
	"fmt"
	"go-gqlgen-sqlboiler/models"

	_ "github.com/mattn/go-sqlite3"
	"github.com/volatiletech/sqlboiler/v4/boil"
)

func main() {
	ctx := context.Background()
	db, err := sql.Open("sqlite3", "models/dev.db")
	if err != nil {
		panic(err)
	}

	reset(ctx, db)
	seed(ctx, db)
}

func reset(ctx context.Context, db *sql.DB) {
	models.Articles().DeleteAll(ctx, db)
	models.Users().DeleteAll(ctx, db)
}

func seed(ctx context.Context, db *sql.DB) {
	for userIndex := 1; userIndex <= 1000; userIndex++ {
		user := &models.User{
			ID:           fmt.Sprintf("user-%d", userIndex),
			Name:         fmt.Sprintf("user%d", userIndex),
			Email:        fmt.Sprintf("user%d@example.com", userIndex),
			PasswordHash: "password",
		}
		user.Insert(ctx, db, boil.Infer())

		for articleIndex := 1; articleIndex <= 10000; articleIndex++ {
			article := &models.Article{
				Slug:        fmt.Sprintf("user%d-article%d-slug", userIndex, articleIndex),
				Body:        fmt.Sprintf("user%d-article%d-body", userIndex, articleIndex),
				Title:       fmt.Sprintf("user%d-article%d-title", userIndex, articleIndex),
				Description: "desc",
				AuthorId:    user.ID,
			}
			article.Insert(ctx, db, boil.Infer())
		}
	}
}
