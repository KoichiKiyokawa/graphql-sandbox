package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-gorm-cockroachdb/auth"
	"go-gqlgen-gorm-cockroachdb/graph/generated"
	"go-gqlgen-gorm-cockroachdb/model"
)

func (r *mutationResolver) CreateStatus(ctx context.Context, input *generated.CreateStatusInput) (*model.Status, error) {
	var attachments []model.Attachment
	for _, id := range input.MediaIds {
		attachments = append(attachments, model.Attachment{ID: id})
	}
	newStatus := model.Status{
		Content:         input.Status,
		Attachments:     attachments,
		AccountRelation: model.Account{ID: auth.AccountOf(ctx).ID},
	}
	if err := r.db.Create(&newStatus).Error; err != nil {
		return nil, err
	}
	return &newStatus, nil
}

func (r *mutationResolver) DeleteStatus(ctx context.Context, id int) (*generated.Message, error) {
	if err := r.db.Delete(&model.Status{ID: id}).Error; err != nil {
		return nil, err
	}
	return &generated.Message{Message: "Status deleted"}, nil
}

func (r *queryResolver) Status(ctx context.Context, id int) (*model.Status, error) {
	status := model.Status{ID: id}
	if err := r.db.First(&status).Error; err != nil {
		return nil, err
	}
	return &status, nil
}

func (r *queryResolver) Statuses(ctx context.Context) ([]*model.Status, error) {
	var statuses []*model.Status
	if err := r.db.Find(&statuses).Error; err != nil {
		return nil, err
	}
	return statuses, nil
}

func (r *statusResolver) Account(ctx context.Context, obj *model.Status) (*model.Account, error) {
	account := model.Account{ID: obj.AccountID}
	if err := r.db.Find(&account).Error; err != nil {
		return nil, err
	}
	return &account, nil
}

func (r *statusResolver) MediaAttachments(ctx context.Context, obj *model.Status) ([]*model.Attachment, error) {
	var attachments []*model.Attachment
	if err := r.db.Model(&model.Status{ID: obj.ID}).Association("Attachments").Find(&attachments); err != nil {
		return nil, err
	}
	return attachments, nil
}

// Status returns generated.StatusResolver implementation.
func (r *Resolver) Status() generated.StatusResolver { return &statusResolver{r} }

type statusResolver struct{ *Resolver }
