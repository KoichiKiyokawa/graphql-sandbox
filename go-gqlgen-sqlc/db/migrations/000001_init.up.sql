create table users (
  id uuid primary key,
  name varchar(255) not null,
  email varchar(255) not null unique,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table posts (
  id uuid primary key,
  title varchar(255) not null,
  body text not null,
  user_id uuid not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  foreign key (user_id) references users(id) on delete cascade
);

create table tags (
  id uuid primary key,
  text varchar(255) not null unique
);

create table posts_tags (
  post_id uuid not null,
  tag_id uuid not null,
  foreign key (post_id) references posts(id) on delete cascade,
  foreign key (tag_id) references tags(id) on delete cascade
);