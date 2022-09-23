package main

import "go-gqlgen-bun-wire/di"

const defaultPort = "8080"

func main() {
	app := di.InitializeApp()
	app.Run()
}
