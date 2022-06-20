package main

import (
	"fmt"
	"go-gqlgen-gorm-cockroachdb/auth"
	"go-gqlgen-gorm-cockroachdb/config"
	"go-gqlgen-gorm-cockroachdb/graph/generated"
	"go-gqlgen-gorm-cockroachdb/loader"
	"go-gqlgen-gorm-cockroachdb/resolver"
	"go-gqlgen-gorm-cockroachdb/service"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	_ "github.com/joho/godotenv/autoload"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{
		Resolvers: resolver.NewResolver(db.Debug(), &service.UploadService{}),
	}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", loader.Middleware(loader.NewLoaders(db.Debug()))(
		auth.Middleware(db)(srv),
	))

	config := config.NewConfig()
	addr := fmt.Sprintf("%s:%s", config.Host(), config.Port())
	log.Printf("connect to http://%s/ for GraphQL playground", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}
