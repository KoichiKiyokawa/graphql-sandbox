package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-ent/auth"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/generated"
	"go-gqlgen-ent/model"

	"github.com/google/uuid"
	"github.com/vektah/gqlparser/v2/gqlerror"
)

func (r *mutationResolver) LikeArticle(ctx context.Context, articleID string) (*model.Response, error) {
	userID, err := auth.GetSessionServiceForContext(ctx).GetCurrentUserId()
	if err != nil {
		return nil, err
	}
	if userID == nil {
		return nil, gqlerror.Errorf("User is not logged in")
	}

	_, err = r.client.User.UpdateOneID(*userID).AddLikedArticleIDs(uuid.MustParse(articleID)).Save(ctx)
	if err != nil {
		return nil, err
	}

	return &model.Response{Message: "ok"}, nil
}

func (r *queryResolver) User(ctx context.Context, id string) (*ent.User, error) {
	return r.client.User.Get(ctx, uuid.MustParse(id))
}

func (r *queryResolver) Users(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int) (*ent.UserConnection, error) {
	return r.client.User.Query().Paginate(ctx, after, first, before, last)
}

func (r *userResolver) ID(ctx context.Context, obj *ent.User) (string, error) {
	return obj.ID.String(), nil
}

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
