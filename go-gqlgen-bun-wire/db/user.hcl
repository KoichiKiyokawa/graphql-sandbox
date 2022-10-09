table "users" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "email" {
    null = false
    type = varchar(255)
  }
  column "username" {
    null = false
    type = varchar(255)
  }
  column "bio" {
    null = true
    type = varchar(255)
  }
  column "image" {
    null = true
    type = varchar(255)
  }
  primary_key {
    columns = [column.id]
  }
}