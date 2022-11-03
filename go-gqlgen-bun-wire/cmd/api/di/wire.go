//go:build wireinject
// +build wireinject

package di

import (
	"go-gqlgen-bun-wire/app/infra/dao"
	"go-gqlgen-bun-wire/app/infra/db"
	"go-gqlgen-bun-wire/app/infra/loader"
	"go-gqlgen-bun-wire/app/resolver"
	"go-gqlgen-bun-wire/app/service"

	"github.com/google/wire"
)

func InitializeApp() *app {
	wire.Build(
		// dao
		dao.NewArticle,

		// service
		service.NewArticle,

		db.NewDB,
		resolver.NewResolver,
		loader.NewLoaders,
		newApp,
	)
	return &app{}
}
