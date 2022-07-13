//go:generate go run github.com/kyleconroy/sqlc/cmd/sqlc generate
package main

import (
	"context"
	"database/sql"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/generated"
	"go-gqlgen-sqlc/loader"
	"go-gqlgen-sqlc/resolver"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	database, err := sql.Open("postgres", "user=pqgotest dbname=pqgotest sslmode=verify-full")
	if err != nil {
		panic(err)
	}

	queries := db.New(database)
	loaders := loader.NewLoaders(queries)

	gqlSrv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: resolver.NewResolver(queries)}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", loader.Middleware(loaders, gqlSrv))

	srv := &http.Server{Addr: "127.0.0.1:" + port}

	// cf) https://github.com/gin-gonic/gin#manually
	// Initializing the server in a goroutine so that
	// it won't block the graceful shutdown handling below
	go func() {
		log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
		log.Fatal(srv.ListenAndServe())
	}()

	// Wait for interrupt signal to gracefully shutdown the server with a timeout of 10 seconds.
	// Use a buffered channel to avoid missing signals as recommended for signal.Notify
	quit := make(chan os.Signal, 1)
	// kill -2 is syscall.SIGINT
	// kill -9 is syscall.SIGKILL but can't be caught, so don't need to add it
	signal.Notify(quit, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal(err)
	}
}
