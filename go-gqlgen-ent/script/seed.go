//go:build ignore
// +build ignore

package main

import (
	"context"
	"fmt"
	"go-gqlgen-ent/ent"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	client, err := ent.Open("sqlite3", "file:sqlite.db?_fk=1")
	if err != nil {
		log.Fatal("failed to open sqlite connection", err)
	}
	defer client.Close()
	ctx := context.Background()

	client.User.Delete().Exec(ctx)

	fmt.Println("Create Users")

	for userIndex := 0; userIndex < 10; userIndex++ {
		user, err := client.User.Create().
			SetEmail(fmt.Sprintf("user%d@example.com", userIndex)).
			SetName(fmt.Sprintf("user%d", userIndex)).
			SetPasswordHash("TODO:foobar").
			Save(ctx)

		if err != nil {
			log.Fatal(err)
		}

		fmt.Println(user)
	}
}
