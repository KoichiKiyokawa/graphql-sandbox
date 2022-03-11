package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlboiler/dataloader"
	"go-gqlgen-sqlboiler/graph/generated"
	"go-gqlgen-sqlboiler/models"
)

func (r *articleResolver) Author(ctx context.Context, obj *models.Article) (*models.User, error) {
	return dataloader.For(ctx).UserById.Load(obj.AuthorId)
}

func (r *articleResolver) CreatedAt(ctx context.Context, obj *models.Article) (string, error) {
	return obj.CreatedAt.String(), nil
}

func (r *articleResolver) UpdatedAt(ctx context.Context, obj *models.Article) (string, error) {
	return obj.UpdatedAt.String(), nil
}

func (r *queryResolver) Article(ctx context.Context, slug string) (*models.Article, error) {
	article, err := models.FindArticle(ctx, r.DB, slug)
	if err != nil {
		return nil, err
	}
	return article, nil
}

func (r *queryResolver) Articles(ctx context.Context, after *string, before *string, first *int, last *int) (*models.ArticleConnection, error) {
	articles, err := models.Articles().All(ctx, r.DB)
	if err != nil {
		return nil, err
	}
	var edges []*models.ArticleEdge
	for _, article := range articles {
		edges = append(edges, &models.ArticleEdge{Node: article})
	}
	return &models.ArticleConnection{Edges: edges}, nil
}

// Article returns generated.ArticleResolver implementation.
func (r *Resolver) Article() generated.ArticleResolver { return &articleResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type articleResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
