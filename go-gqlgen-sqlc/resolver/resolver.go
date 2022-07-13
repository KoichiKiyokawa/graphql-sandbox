//go:generate go run github.com/99designs/gqlgen generate
package resolver

import (
	"database/sql"
	"go-gqlgen-sqlc/db"
)

type Resolver struct {
	db      *sql.DB
	queries *db.Queries
}

func NewResolver(db *sql.DB, queries *db.Queries) *Resolver {
	return &Resolver{db, queries}
}
