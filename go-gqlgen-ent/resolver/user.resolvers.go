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

func (r *queryResolver) Users(ctx context.Context) ([]*ent.User, error) {
	return r.Client.User.Query().All(ctx)
}

func (r *userResolver) ID(ctx context.Context, obj *ent.User) (string, error) {
	return obj.ID.String(), nil
}

func (r *userResolver) LikedArticles(ctx context.Context, obj *ent.User) ([]*ent.Article, error) {
	panic(fmt.Errorf("not implemented"))
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *userResolver) Articles(ctx context.Context, obj *ent.User) ([]*ent.Article, error) {
	panic(fmt.Errorf("not implemented"))
}
