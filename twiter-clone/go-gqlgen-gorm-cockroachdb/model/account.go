package model

import "golang.org/x/crypto/bcrypt"

type (
	AccountID = int

	Account struct {
		ID           AccountID `json:"id" gorm:"primaryKey"`
		Username     string    `json:"username"`
		PasswordHash string    `json:"-"`
		DisplayName  *string   `json:"display_name"`
		Note         *string   `json:"note"`
		Avatar       *string   `json:"avatar"`
		Header       *string   `json:"header"`

		FollowersRelation  []Account `gorm:"many2many:relationship;foreignKey:ID;joinForeignKey:FolloweeId;References:ID;joinReferences:FollowerId"`
		FollowingsRelation []Account `gorm:"many2many:relationship;foreignKey:ID;joinForeignKey:FollowerId;References:ID;joinReferences:FolloweeId"`
	}
)

func (a *Account) SetPassword(password string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	a.PasswordHash = string(hash)
	return nil
}
