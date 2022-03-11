package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-sqlboiler/graph/generated"
	"go-gqlgen-sqlboiler/models"
)

func (r *messageResolver) From(ctx context.Context, obj *models.Message) (*models.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *messageResolver) To(ctx context.Context, obj *models.Message) (*models.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AddMessage(ctx context.Context, message models.CreateMessageInput) (*models.Message, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *subscriptionResolver) MessageAdded(ctx context.Context) (<-chan *models.Message, error) {
	panic(fmt.Errorf("not implemented"))
}

// Message returns generated.MessageResolver implementation.
func (r *Resolver) Message() generated.MessageResolver { return &messageResolver{r} }

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type messageResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }
