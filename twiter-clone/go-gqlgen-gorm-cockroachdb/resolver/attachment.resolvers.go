package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-gorm-cockroachdb/graph/generated"
	"go-gqlgen-gorm-cockroachdb/model"
)

func (r *attachmentResolver) Type(ctx context.Context, obj *model.Attachment) (generated.Type, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *attachmentResolver) URL(ctx context.Context, obj *model.Attachment) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *attachmentResolver) Description(ctx context.Context, obj *model.Attachment) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

// Attachment returns generated.AttachmentResolver implementation.
func (r *Resolver) Attachment() generated.AttachmentResolver { return &attachmentResolver{r} }

type attachmentResolver struct{ *Resolver }
