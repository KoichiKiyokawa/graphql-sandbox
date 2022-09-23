// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package generated

type Article struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Body        string `json:"body"`
	TagList     []*Tag `json:"tagList"`
}

type Tag struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
