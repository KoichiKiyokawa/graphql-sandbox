table "articles" {
  schema = schema.public
  column "slug" {
    null = false
    type = varchar(255)
  }
  column "title" {
    null = false
    type = varchar(255)
  }
  column "description" {
    null = false
    type = varchar(255)
  }
  column "user_id" {
    null = false
    type = uuid
  }

  primary_key {
    columns = [column.slug]
  }

  foreign_key {
    columns     = [column.user_id]
    ref_columns = [table.users.column.id]
  }
}