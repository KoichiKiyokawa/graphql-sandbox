//go:generate go run github.com/99designs/gqlgen generate
package resolver

import "gorm.io/gorm"

type Resolver struct {
	db *gorm.DB
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{db}
}
