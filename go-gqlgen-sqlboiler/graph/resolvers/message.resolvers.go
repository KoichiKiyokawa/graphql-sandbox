package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"go-gqlgen-sqlboiler/graph/generated"
	"go-gqlgen-sqlboiler/graph/model"
)

func (r *mutationResolver) AddMessage(ctx context.Context, message model.CreateMessageInput) (*model.Message, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *subscriptionResolver) MessageAdded(ctx context.Context) (<-chan *model.Message, error) {
	panic(fmt.Errorf("not implemented"))
}

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type subscriptionResolver struct{ *Resolver }
