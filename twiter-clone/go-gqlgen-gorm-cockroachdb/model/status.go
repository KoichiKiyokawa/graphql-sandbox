package model

type (
	StatusID = int

	Status struct {
		ID      StatusID `json:"id" gorm:"primaryKey;autoIncrement"`
		Content string   `json:"content"`

		AccountID       AccountID    `json:"-"`
		AccountRelation Account      `json:"account" gorm:"foreignKey:AccountID"`
		Attachments     []Attachment `gorm:"many2many:attachment_bindings"`
	}
)
