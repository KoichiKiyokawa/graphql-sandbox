-- name: CreateUser :one
insert into users (name, email) values($1, $2) returning *;

-- name: UpdateUser :one
update users set 
  name = $1,
  email = $2 
where id = $3 returning *;