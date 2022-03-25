package model

type User struct {
	BaseModel
	Name     string
	Email    string
	Articles []Article
}
