-- name: GetAllPosts :many
select * from posts;

-- name: GetPostByUserId :many
select * from posts where user_id = (@user_id::bigserial);

-- name: GetPostsByUserIds :many
select * from posts where user_id = ANY(@ids::bigserial[]);

-- name: CreatePost :one
insert into posts (title, body) values($1, $2) returning *;

-- name: ConnectTagToPost :exec
insert into posts_tags (post_id, tag_id) values(@post_id::bigserial, @tag_id::bigserial);

update posts set title = $1, body = $2 where id = $3 returning *;