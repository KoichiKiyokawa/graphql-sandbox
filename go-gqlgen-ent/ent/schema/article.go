package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Article holds the schema definition for the Article entity.
type Article struct {
	ent.Schema
}

// Fields of the Article.
func (Article) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New),
		field.String("title").NotEmpty().MaxLen(32),
		field.String("body").NotEmpty().MaxLen(65536),
		field.Time("createdAt").Default(time.Now),
		field.Time("updatedAt").Default(time.Now),
	}
}

// Edges of the Article.
func (Article) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("author", User.Type).Annotations(entgql.Bind()).Unique().From("articles").Annotations(entgql.Bind()),
	}
}
