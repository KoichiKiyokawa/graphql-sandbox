table "tags" {
  schema = schema.public
  column "id" {
    null = false
    type = int
  }
  column "name" {
    null = false
    type = varchar(255)
  }
  primary_key {
    columns = [column.id]
  }
}