package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/generated"

	"github.com/google/uuid"
)

func (r *articleResolver) ID(ctx context.Context, obj *ent.Article) (string, error) {
	return obj.ID.String(), nil
}

func (r *queryResolver) Node(ctx context.Context, id string) (ent.Noder, error) {
	return r.client.Noder(ctx, uuid.MustParse(id))
}

func (r *queryResolver) Nodes(ctx context.Context, ids []string) ([]ent.Noder, error) {
	uuids := make([]uuid.UUID, len(ids))
	for i, v := range ids {
		uuids[i] = uuid.MustParse(v)
	}
	return r.client.Noders(ctx, uuids)
}

func (r *queryResolver) Articles(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int) (*ent.ArticleConnection, error) {
	return r.client.Article.Query().Paginate(ctx, after, first, before, last)
}

func (r *queryResolver) Users(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int) (*ent.UserConnection, error) {
	return r.client.User.Query().Paginate(ctx, after, first, before, last)
}

func (r *userResolver) ID(ctx context.Context, obj *ent.User) (string, error) {
	return obj.ID.String(), nil
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type articleResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
