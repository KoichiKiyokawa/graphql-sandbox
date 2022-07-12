-- name: GetTagsByPostId :many
select * from tags where post_id = (@post_id::bigserial);

-- name: CreateTag :one
insert into tags (text) values($1) returning *;