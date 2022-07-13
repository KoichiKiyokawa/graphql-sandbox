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
	results := make([]*dataloader.Result[[]*db.Post], len(keys))
	if err != nil {
		results[0] = &dataloader.Result[[]*db.Post]{Error: err}
		return results
	}

	for i, key := range keys {
		for _, post := range allPosts {
			if post.UserID != key {
				continue
			}

			if results[i] == nil {
				results[i] = &dataloader.Result[[]*db.Post]{Data: []*db.Post{}}
			}

			results[i].Data = append(results[i].Data, post)
		}
	}

	return results
}
