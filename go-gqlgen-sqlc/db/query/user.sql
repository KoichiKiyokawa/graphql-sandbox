-- name: GetUser :one
select * from users where id = $1;

-- name: GetUsers :many
select * from users;

-- name: GetPostCountsByUserIds :many
select user_id, count(*) from posts where user_id = ANY(@user_ids::uuid[]);

-- name: CreateUser :one
insert into users (id, name, email, password_hash) values($1, $2, $3, $4) returning *;

-- name: UpdateUser :one
update users set 
  name = $1,
  email = $2 
where id = $3 returning *;