package auth

import (
	"errors"
	"net/http"

	"github.com/gorilla/sessions"
)

const userIdSessionKey = "userId"

type SessionService struct {
	session *sessions.Session
	w       http.ResponseWriter
	r       *http.Request
}

func (s *SessionService) save() error {
	if err := s.session.Save(s.r, s.w); err != nil {
		http.Error(s.w, err.Error(), http.StatusInternalServerError)
		return err
	}
	return nil
}

func (s *SessionService) GetCurrentUserId() (string, error) {
	userID := s.session.Values[userIdSessionKey]
	if userID == nil {
		return "", errors.New("User is not logged in")
	}

	return userID.(string), nil
}

func (s *SessionService) SetCurrentUserId(userId string) error {
	s.session.Values[userIdSessionKey] = userId
	return s.save()
}

func (s *SessionService) RemoveCurrentUserId() error {
	delete(s.session.Values, userIdSessionKey)
	return s.save()
}
