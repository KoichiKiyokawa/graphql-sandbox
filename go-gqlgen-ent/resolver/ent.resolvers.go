package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-ent/ent"
	"go-gqlgen-ent/generated"
)

func (r *articleResolver) ID(ctx context.Context, obj *ent.Article) (string, error) {
	return obj.ID.String(), nil
}

func (r *queryResolver) Node(ctx context.Context, id string) (ent.Noder, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Nodes(ctx context.Context, ids []string) ([]ent.Noder, error) {
	panic(fmt.Errorf("not implemented"))
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

func (r *createArticleInputResolver) AuthorID(ctx context.Context, obj *ent.CreateArticleInput, data *string) error {
	panic(fmt.Errorf("not implemented"))
	obj.Mutate(r.client.Article.Create().Mutation())
}

func (r *createArticleInputResolver) LikeduserIDs(ctx context.Context, obj *ent.CreateArticleInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *createUserInputResolver) ArticleIDs(ctx context.Context, obj *ent.CreateUserInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *createUserInputResolver) LikedarticleIDs(ctx context.Context, obj *ent.CreateUserInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateArticleInputResolver) AuthorID(ctx context.Context, obj *ent.UpdateArticleInput, data *string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateArticleInputResolver) AddLikedUserIDs(ctx context.Context, obj *ent.UpdateArticleInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateArticleInputResolver) RemoveLikedUserIDs(ctx context.Context, obj *ent.UpdateArticleInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateUserInputResolver) AddArticleIDs(ctx context.Context, obj *ent.UpdateUserInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateUserInputResolver) RemoveArticleIDs(ctx context.Context, obj *ent.UpdateUserInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateUserInputResolver) AddLikedArticleIDs(ctx context.Context, obj *ent.UpdateUserInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

func (r *updateUserInputResolver) RemoveLikedArticleIDs(ctx context.Context, obj *ent.UpdateUserInput, data []string) error {
	panic(fmt.Errorf("not implemented"))
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// User returns generated.UserResolver implementation.
func (r *Resolver) User() generated.UserResolver { return &userResolver{r} }

// CreateArticleInput returns generated.CreateArticleInputResolver implementation.
func (r *Resolver) CreateArticleInput() generated.CreateArticleInputResolver {
	return &createArticleInputResolver{r}
}

// CreateUserInput returns generated.CreateUserInputResolver implementation.
func (r *Resolver) CreateUserInput() generated.CreateUserInputResolver {
	return &createUserInputResolver{r}
}

// UpdateArticleInput returns generated.UpdateArticleInputResolver implementation.
func (r *Resolver) UpdateArticleInput() generated.UpdateArticleInputResolver {
	return &updateArticleInputResolver{r}
}

// UpdateUserInput returns generated.UpdateUserInputResolver implementation.
func (r *Resolver) UpdateUserInput() generated.UpdateUserInputResolver {
	return &updateUserInputResolver{r}
}

type articleResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
type createArticleInputResolver struct{ *Resolver }
type createUserInputResolver struct{ *Resolver }
type updateArticleInputResolver struct{ *Resolver }
type updateUserInputResolver struct{ *Resolver }
