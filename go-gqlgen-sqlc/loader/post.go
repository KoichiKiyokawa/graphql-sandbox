package loader

import (
	"context"
	"go-gqlgen-sqlc/db"
	"go-gqlgen-sqlc/graphql/scalar"

	"github.com/graph-gophers/dataloader/v7"
)

type postReader struct {
	queries *db.Queries
}

func (p *postReader) PostsByUserID(ctx context.Context, keys []scalar.UUID) []*dataloader.Result[[]*db.Post] {
	allPosts, err := p.queries.GetPostsByUserIds(ctx, keys)
	if err != nil {
		return fillError[[]*db.Post](err, len(keys))
	}

	return sortItemsAsKeysOrder2d(keys, allPosts, func(item *db.Post) scalar.UUID { return item.UserID })
}

func (p *postReader) PostCountByUserID(ctx context.Context, keys []scalar.UUID) []*dataloader.Result[int] {
	postCounts, err := p.queries.GetPostCountsByUserIds(ctx, keys)
	if err != nil {
		return fillError[int](err, len(keys))
	}

	return sortItemsAsKeysOrder1d(keys, postCounts, func(item *db.GetPostCountsByUserIdsRow) scalar.UUID { return item.UserID }, func(item *db.GetPostCountsByUserIdsRow) int { return int(item.Count) })
}
