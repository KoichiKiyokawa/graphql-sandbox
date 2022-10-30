package model

type ArticleSlug string

type Article struct {
	Slug        ArticleSlug
	Title       string
	Description string
	Body        string
}
