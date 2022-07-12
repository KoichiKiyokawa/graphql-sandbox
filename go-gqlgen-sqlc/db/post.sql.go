// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.14.0
// source: post.sql

package db

import (
	"context"

	"github.com/lib/pq"
)

const connectTagToPost = `-- name: ConnectTagToPost :exec
insert into posts_tags (post_id, tag_id) values($1::bigserial, $2::bigserial)
`

type ConnectTagToPostParams struct {
	PostID int64
	TagID  int64
}

func (q *Queries) ConnectTagToPost(ctx context.Context, arg *ConnectTagToPostParams) error {
	_, err := q.db.ExecContext(ctx, connectTagToPost, arg.PostID, arg.TagID)
	return err
}

const createPost = `-- name: CreatePost :one
insert into posts (title, body) values($1, $2) returning id, title, body, user_id, created_at, updated_at
`

type CreatePostParams struct {
	Title string
	Body  string
}

func (q *Queries) CreatePost(ctx context.Context, arg *CreatePostParams) (*Post, error) {
	row := q.db.QueryRowContext(ctx, createPost, arg.Title, arg.Body)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.Title,
		&i.Body,
		&i.UserID,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return &i, err
}

const getAllPosts = `-- name: GetAllPosts :many
select id, title, body, user_id, created_at, updated_at from posts
`

func (q *Queries) GetAllPosts(ctx context.Context) ([]*Post, error) {
	rows, err := q.db.QueryContext(ctx, getAllPosts)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Body,
			&i.UserID,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPostByUserId = `-- name: GetPostByUserId :many
select id, title, body, user_id, created_at, updated_at from posts where user_id = ($1::bigserial)
`

func (q *Queries) GetPostByUserId(ctx context.Context, userID int64) ([]*Post, error) {
	rows, err := q.db.QueryContext(ctx, getPostByUserId, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Body,
			&i.UserID,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPostsByUserIds = `-- name: GetPostsByUserIds :many
select id, title, body, user_id, created_at, updated_at from posts where user_id = ANY($1::bigserial[])
`

func (q *Queries) GetPostsByUserIds(ctx context.Context, ids []int64) ([]*Post, error) {
	rows, err := q.db.QueryContext(ctx, getPostsByUserIds, pq.Array(ids))
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Body,
			&i.UserID,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
