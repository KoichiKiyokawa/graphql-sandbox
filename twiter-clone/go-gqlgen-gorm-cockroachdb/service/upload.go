package service

import (
	"fmt"
	"go-gqlgen-gorm-cockroachdb/config"
)

type (
	UploadService struct{}
)

func NewUploadService() *UploadService {
	return &UploadService{}
}

var cfg = config.NewConfig()

func (UploadService) UploadFile(base64Encoded string, fileName string) (imagePath string, err error) {
	imagePath = fmt.Sprintf("http://%s:%s/%s", cfg.Host(), cfg.Port(), fileName)
	return
}
