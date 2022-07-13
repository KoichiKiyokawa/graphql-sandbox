// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.14.0
// source: user.sql

package db

import (
	"context"
)

const createUser = `-- name: CreateUser :one
insert into users (name, email) values($1, $2) returning id, name, email, created_at, updated_at
`

type CreateUserParams struct {
	Name  string
	Email string
}

func (q *Queries) CreateUser(ctx context.Context, arg *CreateUserParams) (*User, error) {
	row := q.db.QueryRowContext(ctx, createUser, arg.Name, arg.Email)
	var i User
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Email,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return &i, err
}

const updateUser = `-- name: UpdateUser :one
update users set 
  name = $1,
  email = $2 
where id = $3 returning id, name, email, created_at, updated_at
`

type UpdateUserParams struct {
	Name  string
	Email string
	ID    int64
}

func (q *Queries) UpdateUser(ctx context.Context, arg *UpdateUserParams) (*User, error) {
	row := q.db.QueryRowContext(ctx, updateUser, arg.Name, arg.Email, arg.ID)
	var i User
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Email,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return &i, err
}