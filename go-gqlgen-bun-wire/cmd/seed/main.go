package main

import "go-gqlgen-bun-wire/app/infra/db"

func main() {
	db := db.NewDB()
	defer db.Close()

	db.NewInsert()
}
