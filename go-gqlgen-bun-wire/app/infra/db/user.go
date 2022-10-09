package db

import (
	"go-gqlgen-bun-wire/app/domain/model"

	"github.com/google/uuid"
)

type User struct {
	ID       uuid.UUID `bun:",pk,type:uuid,default:uuid_generate_v4()"`
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
