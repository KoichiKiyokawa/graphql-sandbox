package db

import "go-gqlgen-bun-wire/app/domain/model"

type User struct {
	ID       string `bun:",pk"`
	Email    string
	Username string
	Bio      *string
	Image    *string
}

func (u *User) ConvertToModel() *model.User {
	return &model.User{
		Email:    u.Email,
		Username: u.Username,
		Bio:      u.Bio,
		Image:    u.Image,
	}
}
