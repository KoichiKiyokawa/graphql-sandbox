//go:build ignore
// +build ignore

package main

import (
	"context"
	"fmt"
	"go-gqlgen-ent/ent"
	"log"

	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	client, err := ent.Open("sqlite3", "file:sqlite.db?_fk=1")
	if err != nil {
		log.Fatal("failed to open sqlite connection", err)
	}
	defer client.Close()
	ctx := context.Background()

	// reset
	client.Article.Delete().Exec(ctx)
	client.User.Delete().Exec(ctx)

	for userIndex := 0; userIndex < 10; userIndex++ {
		user, err := client.User.Create().
			SetEmail(fmt.Sprintf("user%d@example.com", userIndex)).
			SetName(fmt.Sprintf("user%d", userIndex)).
			SetPasswordHash(getHashedDummyPassword()).
			Save(ctx)

		if err != nil {
			log.Fatal(err)
		}

		fmt.Println(user)

		for articleIndex := 0; articleIndex < 100; articleIndex++ {
			article, err := client.Article.Create().
				SetAuthor(user).
				SetTitle(fmt.Sprintf("user%d-title-%d", userIndex, articleIndex)).
				SetBody("user%d-body-%d").Save(ctx)

			if err != nil {
				log.Fatal(err)
			}

			fmt.Println(article)
		}
	}
}

func getHashedDummyPassword() string {
	pass, err := bcrypt.GenerateFromPassword([]byte("password"), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal(err)
	}

	return string(pass)
}
