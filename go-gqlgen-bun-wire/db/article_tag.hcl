table "article_tags" {
  schema = schema.public
  column "article_slug" {
    null = false
    type = varchar(255)
  }

  column "tag_id" {
    null = false
    type = int
  }

  primary_key {
    columns = [column.article_slug, column.tag_id]
  }

  foreign_key {
    columns     = [column.article_slug]
    ref_columns = [table.articles.column.slug]
  }

  foreign_key {
    columns     = [column.tag_id]
    ref_columns = [table.tags.column.id]
  }
}