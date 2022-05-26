//go:build ignore
// +build ignore

package main

import (
	"flag"
	"go-gqlgen-gorm-cockroachdb/model"
	"log"
	"os"

	_ "github.com/joho/godotenv/autoload"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var tables = []any{
	&model.Account{},
}

func main() {
	flag.Parse()
	args := flag.Args()

	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	if len(args) > 0 && args[0] == "reset" {
		reset(db)
	}

	db.AutoMigrate(tables...)
}

func reset(db *gorm.DB) {
	db.Migrator().DropTable(tables...)
}
