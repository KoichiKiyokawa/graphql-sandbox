package model

type Article struct {
	BaseModel
	Title string `json:"title"`
	Body  string `json:"body"`
	User  User   `json:"user"`
}
