package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/generated"

	"github.com/google/uuid"
)

func (r *queryResolver) User(ctx context.Context, id string) (*ent.User, error) {
	return r.Client.User.Get(ctx, uuid.MustParse(id))
}

func (r *queryResolver) Users(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int) (*ent.UserConnection, error) {
	return r.Client.User.Query().Paginate(ctx, after, first, before, last)
}

func (r *userResolver) ID(ctx context.Context, obj *ent.User) (string, error) {
	return obj.ID.String(), nil
}

func (r *userResolver) Articles(ctx context.Context, obj *ent.User, after *ent.Cursor, first *int, before *ent.Cursor, last *int) (*ent.ArticleConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *userResolver) LikedArticles(ctx context.Context, obj *ent.User, after *ent.Cursor, first *int, before *ent.Cursor, last *int) (*ent.ArticleConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
