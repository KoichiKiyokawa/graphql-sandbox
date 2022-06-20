package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm-cockroachdb/graph/generated"
	"go-gqlgen-gorm-cockroachdb/model"
)

func (r *attachmentResolver) Type(ctx context.Context, obj *model.Attachment) (generated.Type, error) {
	return generated.Type(obj.Type), nil
}

// Attachment returns generated.AttachmentResolver implementation.
func (r *Resolver) Attachment() generated.AttachmentResolver { return &attachmentResolver{r} }

type attachmentResolver struct{ *Resolver }
