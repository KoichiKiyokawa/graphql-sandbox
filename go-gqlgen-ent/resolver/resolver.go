//go:generate go run github.com/99designs/gqlgen generate

package resolver

import "go-gqlgen-ent/ent"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	client *ent.Client
}

func NewResolver(client *ent.Client) *Resolver {
	return &Resolver{client: client}
}
