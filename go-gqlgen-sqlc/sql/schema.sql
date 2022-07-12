create table users (
  id bigserial primary key,
  name varchar(255) not null,
  email varchar(255) not null unique,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table posts (
  id bigserial primary key,
  title varchar(255) not null,
  body text not null,
  user_id bigserial not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  foreign key (user_id) references users(id)
);

create table tags (
  id bigserial primary key,
  text varchar(255) not null unique
);

create table posts_tags (
  post_id bigserial not null,
  tag_id bigserial not null,
  foreign key (post_id) references posts(id),
  foreign key (tag_id) references tags(id)
);