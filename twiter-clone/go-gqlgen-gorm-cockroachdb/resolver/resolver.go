//go:generate go run github.com/99designs/gqlgen generate
package resolver

import (
	"go-gqlgen-gorm-cockroachdb/service"

	"gorm.io/gorm"
)

type Resolver struct {
	db            *gorm.DB
	uploadService *service.UploadService
}

func NewResolver(db *gorm.DB, us *service.UploadService) *Resolver {
	return &Resolver{db, us}
}
