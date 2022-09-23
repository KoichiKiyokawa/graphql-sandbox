package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-bun-wire/generated"
)

// TagList is the resolver for the tagList field.
func (r *articleResolver) TagList(ctx context.Context, obj *generated.Article) ([]*generated.Tag, error) {
	panic(fmt.Errorf("not implemented: TagList - tagList"))
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

type articleResolver struct{ *Resolver }
