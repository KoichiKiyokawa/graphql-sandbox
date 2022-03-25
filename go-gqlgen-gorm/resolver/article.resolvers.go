package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-gorm/generated"
	"go-gqlgen-gorm/model"
)

func (r *articleResolver) CreatedAt(ctx context.Context, obj *model.Article) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *articleResolver) UpdatedAt(ctx context.Context, obj *model.Article) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

type articleResolver struct{ *Resolver }
