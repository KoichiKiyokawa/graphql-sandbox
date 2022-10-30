package main

import (
	"context"
	"fmt"
	"go-gqlgen-bun-wire/app/domain/model"
	"go-gqlgen-bun-wire/app/infra/db"
	"os"

	"github.com/uptrace/bun"
)

func reset(ctx context.Context, d *bun.DB) {
	// tables := []string{"article_tags", "articles", "users"}
	tables := []any{
		&db.ArticleTag{},
		&db.Article{},
		&db.User{},
	}
	// for _, table := range tables {
	// 	if err := d.NewRaw(fmt.Sprintf("DELETE FROM %s", table)).Scan(ctx); err != nil {
	// 		panic(err)
	// 	}
	// }
	if _, err := d.NewDelete().Model(&tables).Where("1 = 1").Exec(ctx); err != nil {
		panic(err)
	}
}

func main() {
	d := db.NewDB()
	defer d.Close()

	ctx := context.Background()

	if os.Getenv("RESET") == "1" {
		reset(ctx, d)
	}

	for u := 0; u < 10; u++ {
		user := &db.User{
			Email:    fmt.Sprintf("user%d@example.com", u),
			Username: fmt.Sprintf("user%d", u),
		}
		if _, err := d.NewInsert().Model(user).Exec(ctx); err != nil {
			panic(err)
		}

		// Create 100 articles for each user
		for a := 0; a < 100; a++ {
			article := &db.Article{
				Slug:        model.ArticleSlug(fmt.Sprintf("article%d-%d", u, a)),
				Title:       fmt.Sprintf("Article %d-%d", u, a),
				Description: fmt.Sprintf("Article %d-%d description", u, a),
				Body:        fmt.Sprintf("Article %d-%d body", u, a),
				UserID:      user.ID,
			}
			if _, err := d.NewInsert().Model(article).Exec(ctx); err != nil {
				panic(err)
			}
		}
	}
}
