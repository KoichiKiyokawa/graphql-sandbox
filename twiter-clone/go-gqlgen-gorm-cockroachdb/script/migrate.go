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
	&model.Status{},
	&model.Attachment{},
}

// go run script/migrate.go # only migrate
// go run script/migrate.go --reset # with reset
func main() {
	needReset := flag.Bool("reset", false, "reset tables")
	flag.Parse()

	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	if *needReset {
		reset(db)
	}

	db.AutoMigrate(tables...)
}

func reset(db *gorm.DB) {
	db.Migrator().DropTable(tables...)
}
