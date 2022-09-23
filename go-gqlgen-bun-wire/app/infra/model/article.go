package model

type Article struct {
	ID          string
	Title       string
	Description string
	Body        string
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
