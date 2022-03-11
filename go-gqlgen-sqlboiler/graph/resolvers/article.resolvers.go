package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"go-gqlgen-sqlboiler/graph/generated"
	"go-gqlgen-sqlboiler/graph/model"
	"go-gqlgen-sqlboiler/models"
)

func (r *queryResolver) Article(ctx context.Context, slug string) (*model.Article, error) {
	article, err := models.FindArticle(ctx, r.DB, slug)
	if err != nil {
		return nil, err
	}
	return convertFromBoilerModelToGqlModel(article), nil
}

func (r *queryResolver) Articles(ctx context.Context, after *string, before *string, first *int, last *int) (*model.ArticleConnection, error) {
	articles, err := models.Articles().All(ctx, r.DB)
	if err != nil {
		return nil, err
	}
	var edges []*model.ArticleEdge
	for _, article := range articles {
		edges = append(edges, &model.ArticleEdge{Node: convertFromBoilerModelToGqlModel(article)})
	}
	return &model.ArticleConnection{Edges: edges}, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }

func convertFromBoilerModelToGqlModel(article *models.Article) *model.Article {
	return &model.Article{
		Body:        article.Body,
		CreatedAt:   article.CreatedAt.String(),
		UpdatedAt:   article.UpdatedAt.String(),
		Description: article.Description,
		Slug:        article.Slug,
	}
}
