package model

import "golang.org/x/crypto/bcrypt"

type (
	AccountID = int

	Account struct {
		ID           AccountID `json:"id" gorm:"primaryKey;autoIncrement"`
		Username     string    `json:"username"`
		PasswordHash string    `json:"-"`
		DisplayName  *string   `json:"display_name"`
		Note         *string   `json:"note"`
		Avatar       *string   `json:"avatar"`
		Header       *string   `json:"header"`

		FollowersRelation  []Account `gorm:"many2many:relationship;foreignKey:ID;joinForeignKey:ToId;References:ID;joinReferences:FromId"`
		FollowingsRelation []Account `gorm:"many2many:relationship;foreignKey:ID;joinForeignKey:FromId;References:ID;joinReferences:ToId"`
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
