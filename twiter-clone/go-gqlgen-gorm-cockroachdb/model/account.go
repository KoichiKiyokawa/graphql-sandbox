package model

import "golang.org/x/crypto/bcrypt"

type (
	AccountID = int

	Account struct {
		ID           AccountID `json:"id" gorm:"primaryKey"`
		Username     string    `json:"username"`
		PassWordHash string    `json:"-"`
		DisplayName  *string   `json:"display_name"`
		Note         *string   `json:"note"`
		Avatar       *string   `json:"avatar"`
		Header       *string   `json:"header"`
	}

	Relationship struct {
		FolloweeID AccountID `gorm:"primaryKey"`
		FollowerID AccountID `gorm:"primaryKey"`
	}
)

func (a *Account) SetPassword(password string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	a.PassWordHash = string(hash)
	return nil
}
