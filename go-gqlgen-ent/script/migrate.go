//go:build ignore
// +build ignore

package main

import (
	"context"
	"flag"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/ent/migrate"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

// Usage:
// go run script/migrate.go
// go run script/migrate.go --reset
func main() {
	var willReset bool
	flag.Parse()
	flag.BoolVar(&willReset, "reset", false, "Reset the database before migration e.g. go run script/migrate.go --reset")

	client, err := ent.Open("sqlite3", "file:sqlite.db?_fk=1")
	if err != nil {
		log.Fatal(err)
	}
	defer client.Close()

	ctx := context.Background()
	if willReset {
		_, err = client.User.Delete().Exec(ctx)
		if err != nil {
			log.Fatal(err)
		}

		_, err = client.Article.Delete().Exec(ctx)
		if err != nil {
			log.Fatal(err)
		}
	}

	if err := client.Schema.Create(ctx, migrate.WithGlobalUniqueID(true)); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
}
