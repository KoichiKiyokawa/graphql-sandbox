package config

import (
	"os"
)

type config struct{}

func NewConfig() *config {
	return &config{}
}

func (config) Host() string {
	if host := os.Getenv("HOST"); host != "" {
		return host
	}

	// localhostだと、警告がでるため cf) https://qiita.com/terabyte/items/ec4c58bec9425fc02e86#%E8%AD%A6%E5%91%8A%E3%82%92%E6%B6%88%E3%81%99%E6%96%B9%E6%B3%95
	return "127.0.0.1"
}

func (config) Port() string {
	if port := os.Getenv("PORT"); port != "" {
		return port
	}

	return "3000"
}
