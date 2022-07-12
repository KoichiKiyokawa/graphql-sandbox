//go:generate go run github.com/99designs/gqlgen generate
package resolver

import "go-gqlgen-sqlc/db"

type Resolver struct {
	queries *db.Queries
}

func NewResolver(queries *db.Queries) *Resolver {
	return &Resolver{queries: queries}
}
