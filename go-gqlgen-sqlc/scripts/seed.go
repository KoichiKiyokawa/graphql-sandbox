//go:build ignore
// +build ignore

package seed

import (
	"context"
	"database/sql"
	"fmt"
	"go-gqlgen-sqlc/db"
)

func main() {
	database, err := sql.Open("postgres", "user=pqgotest dbname=pqgotest sslmode=verify-full")

	if err != nil {
		panic(err)
	}
	q := db.New(database)
	ctx := context.Background()

	for u := 0; u < 10; u++ {
		user, _ := q.CreateUser(ctx, &db.CreateUserParams{
			Name:  fmt.Sprintf("user%d", u),
			Email: fmt.Sprintf("user%d@example.com", u),
		})

		for p := 0; p < 100; p++ {
			q.CreatePost(ctx, &db.CreatePostParams{
				UserID: user.ID,
				Title:  fmt.Sprintf("user%d-title%d", u, p),
				Body:   fmt.Sprintf("user%d-body%d", u, p),
			})
		}
	}
}
