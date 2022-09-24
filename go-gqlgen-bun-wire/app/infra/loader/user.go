package loader

import (
	"context"
	"go-gqlgen-bun-wire/app/domain/model"
	"go-gqlgen-bun-wire/app/infra/db"

	"github.com/graph-gophers/dataloader/v7"
	"github.com/uptrace/bun"
)

// UserReader reads Users from a database
type UserReader struct {
	db *bun.DB
}

func (u *UserReader) UserByID(ctx context.Context, keys []string) []*dataloader.Result[*model.User] {
	users := make([]*db.User, len(keys))
	for i, key := range keys {
		users[i] = &db.User{ID: key}
	}

	u.db.NewSelect().Model(users).WherePK().Scan(ctx)
	idToUser := make(map[string]*db.User, len(users))
	for _, user := range users {
		idToUser[user.ID] = user
	}

	result := make([]*dataloader.Result[*model.User], len(keys))
	for i, key := range keys {
		result[i] = &dataloader.Result[*model.User]{Data: idToUser[key].ConvertToModel()}
	}
	return result
}
