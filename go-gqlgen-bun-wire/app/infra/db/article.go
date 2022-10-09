package db

import (
	"go-gqlgen-bun-wire/app/domain/model"

	"github.com/google/uuid"
)

type Article struct {
	Slug        string `bun:",pk"`
	Title       string
	Description string
	Body        string

	UserID uuid.UUID
	User   User  `bun:"rel:belongs-to,join:user_id=id"`
	Tags   []Tag `bun:"m2m:article_tags,join:Article=Tag"`
}

func (a *Article) ConvertToModel() *model.Article {
	return &model.Article{
		Slug:        a.Slug,
		Title:       a.Title,
		Description: a.Description,
		Body:        a.Body,
	}
}

type ArticleTag struct {
	ArticleSlug string   `bun:",pk"`
	Article     *Article `bun:"rel:belongs-to,join:article_slug=slug"`

	TagID string `bun:",pk"`
	Tag   *Tag   `bun:"rel:belongs-to,join:tag_id=id"`
}

type Tag struct {
	ID   int `bun:",pk"`
	Name string
}
