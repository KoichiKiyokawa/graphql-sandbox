package app

import (
	"go-gqlgen-bun-wire/app/resolver"
	"go-gqlgen-bun-wire/generated"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/uptrace/bun"
)

type App struct {
	resolver *resolver.Resolver
	db       *bun.DB
}

func NewApp(resolver *resolver.Resolver, db *bun.DB) *App {
	return &App{resolver: resolver, db: db}
}

const defaultPort = "8080"

func (a *App) Run() {
	defer a.db.Close()

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: a.resolver}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe("127.0.0.1:"+port, nil))
}
