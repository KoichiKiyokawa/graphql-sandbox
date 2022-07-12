-- GetTagsByPostId :many
select * from tags where post_id = (@post_id::bigserial);