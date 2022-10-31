package main

import "go-gqlgen-bun-wire/cmd/api/di"

const defaultPort = "8080"

func main() {
	app := di.InitializeApp()
	app.Run()
}
