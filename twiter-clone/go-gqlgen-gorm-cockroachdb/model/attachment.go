package model

type (
	AttachmentID = int

	Attachment struct {
		ID   AttachmentID `json:"id" gorm:"primaryKey;autoIncrement"`
		Type string       `json:"type"`

		Bindings []Status `gorm:"many2many:attachment_bindings"`
	}
)
