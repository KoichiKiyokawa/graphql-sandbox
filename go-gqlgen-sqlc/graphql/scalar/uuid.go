package scalar

import (
	"fmt"
	"io"

	"github.com/google/uuid"
)

type UUID struct{ uuid.UUID }

func (u *UUID) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("UUID must be a string")
	}

	id, err := uuid.Parse(str)
	if err != nil {
		return err
	}
	*u = UUID{id}
	return nil
}

// MarshalGQL implements the graphql.Marshaler interface
func (u UUID) MarshalGQL(w io.Writer) {
	w.Write([]byte(u.String()))
}
