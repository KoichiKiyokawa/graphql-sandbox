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
		for i := range keys {
			results[i] = &dataloader.Result[[]*db.Post]{Error: err}
		}
		return results
	}

	keyToIndex := map[scalar.UUID]int{}
	for i, key := range keys {
		keyToIndex[key] = i
	}

	for _, post := range allPosts {
		i := keyToIndex[post.UserID]
		if results[i] == nil {
			results[i] = &dataloader.Result[[]*db.Post]{Data: []*db.Post{}}
		}

		results[i].Data = append(results[i].Data, post)
	}

	return results
}

func (p *postReader) PostCountByUserID(ctx context.Context, keys []scalar.UUID) []*dataloader.Result[int] {
	postCounts, err := p.queries.GetPostCountsByUserIds(ctx, keys)
	results := make([]*dataloader.Result[int], len(keys))
	if err != nil {
		for i := range keys {
			results[i] = &dataloader.Result[int]{Error: err}
		}
		return results
	}

	keyToIndex := map[scalar.UUID]int{}
	for i, key := range keys {
		keyToIndex[key] = i
	}

	for _, postCount := range postCounts {
		i := keyToIndex[postCount.UserID]
		results[i].Data = int(postCount.Count)
	}

	return results
}
