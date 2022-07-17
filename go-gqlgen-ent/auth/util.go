package auth

import (
	"os"
	"time"

	"github.com/gorilla/sessions"
)

func getSessionStore() *sessions.CookieStore {
	sessionStore := sessions.NewCookieStore([]byte(getSecretKey()))

	sessionStore.Options = &sessions.Options{
		Path:   "/",
		MaxAge: int(time.Hour * 24),
	}

	return sessionStore
}

func getSecretKey() string {
	key := os.Getenv("SECRET_KEY")
	if key == "" {
		return "default-secret-key"
	}

	return key
}
