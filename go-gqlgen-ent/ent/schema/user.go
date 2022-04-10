package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// User holds the schema definition for the User entity.
type User struct {
	ent.Schema
}

// Fields of the User.
func (User) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New),
		field.String("name").NotEmpty().MaxLen(32),
		field.String("email").NotEmpty(),
		field.String("passwordHash").NotEmpty(),
	}
}

// Edges of the User.
func (User) Edges() []ent.Edge {
	return []ent.Edge{
		// TODO: "entgo.io/contrib/entgql" の最新版がリリースされるまで、RelayConnectionメソッドは使えない
		edge.To("articles", Article.Type).Annotations(entgql.RelayConnection()),
	}
}
