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
	posts, err := p.queries.GetPostsByUserIds(ctx, keys)
	result := make([]*dataloader.Result[[]*db.Post], len(keys))
	if err != nil {
		for i := range keys {
			result[i] = &dataloader.Result[[]*db.Post]{Error: err}
		}
		return result
	}

	keyToPosts := make(map[scalar.UUID][]*db.Post)
	for _, post := range posts {
		keyToPosts[post.UserID] = append(keyToPosts[post.UserID], post)
	}

	for i, key := range keys {
		result[i] = &dataloader.Result[[]*db.Post]{Data: keyToPosts[key]}
	}
	return result

	// builder := &dataloaderBuilder[scalar.UUID, *db.Post, *db.Post]{
	// 	keys: keys,
	// 	itemsFetcher: func() ([]*db.Post, error) {
	// 		return p.queries.GetPostsByUserIds(ctx, keys)
	// 	},
	// 	itemToKey: func(item *db.Post) scalar.UUID {
	// 		return item.UserID
	// 	},
	// }
	// return builder.sortTo2d()
}

func (p *postReader) PostCountByUserID(ctx context.Context, keys []scalar.UUID) []*dataloader.Result[int] {
	builder := &dataloaderBuilder[scalar.UUID, *db.GetPostCountsByUserIdsRow, int]{
		keys: keys,
		itemsFetcher: func() ([]*db.GetPostCountsByUserIdsRow, error) {
			return p.queries.GetPostCountsByUserIds(ctx, keys)
		},
		itemToKey: func(item *db.GetPostCountsByUserIdsRow) scalar.UUID {
			return item.UserID
		},
		itemToValue: func(item *db.GetPostCountsByUserIdsRow) int {
			return int(item.Count)
		},
	}
	return builder.sortTo1d()
}
