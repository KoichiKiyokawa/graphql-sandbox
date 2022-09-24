package db

import "go-gqlgen-bun-wire/app/domain/model"

type Article struct {
	Slug        string `bun:",pk"`
	Title       string
	Description string
	Body        string

	UserID string
	User   User `bun:"belongs-to,join:user_id=id"`
}

func (a *Article) ConvertToModel() *model.Article {
	return &model.Article{
		Slug:        a.Slug,
		Title:       a.Title,
		Description: a.Description,
		Body:        a.Body,
		AuthorID:    a.UserID,
	}
}

type ArticleTag struct {
	ArticleID string   `bun:",pk"`
	Article   *Article `bun:"rel:belongs-to,join:article_id=id"`

	TagID string `bun:",pk"`
	Tag   *Tag   `bun:"rel:belongs-to,join:tag_id=id"`
}

type Tag struct {
	ID   string
	Name string
}
