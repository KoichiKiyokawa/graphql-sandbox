-- name: GetTagsByPostId :many
select * from tags where post_id = (@post_id::uuid);

-- name: CreateTag :one
insert into tags (text) values($1) returning *;