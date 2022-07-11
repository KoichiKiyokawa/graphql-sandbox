package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"file-upload/graph/generated"
	"file-upload/graph/model"
	"io"
	"os"

	"github.com/99designs/gqlgen/graphql"
)

// Upload is the resolver for the upload field.
func (r *mutationResolver) Upload(ctx context.Context, file *graphql.Upload) (*model.MessageResponse, error) {

	dest, err := os.Create(".data/" + file.Filename)
	if err != nil {
		return nil, err
	}

	_, err = io.Copy(dest, (file.File))
	if err != nil {
		return nil, err
	}

	return &model.MessageResponse{Message: toPointer("ok")}, nil
}

// Health is the resolver for the health field.
func (r *queryResolver) Health(ctx context.Context) (string, error) {
	return "ok", nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
