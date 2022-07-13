-- name: GetAllPosts :many
select * from posts order by created_at desc;

-- name: GetPostByUserId :many
select * from posts where user_id = (@user_id::uuid) order by created_at desc;

-- name: GetPostsByUserIds :many
select * from posts where user_id = ANY(@ids::uuid[]) order by created_at desc;

-- name: GetPostsByTagId :many
select posts.* from posts join posts_tags on posts.id = posts_tags.post_id and posts_tags.tag_id = (@tag_id::uuid);

-- name: CreatePost :one
insert into posts (title, body) values($1, $2) returning *;

-- name: ConnectTagToPost :exec
insert into posts_tags (post_id, tag_id) values(@post_id::uuid, @tag_id::uuid);

update posts set title = $1, body = $2 where id = $3 returning *;