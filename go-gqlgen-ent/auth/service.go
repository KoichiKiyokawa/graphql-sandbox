package auth

import (
	"errors"
	"net/http"

	"github.com/google/uuid"
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

func (s *SessionService) GetCurrentUserId() (*uuid.UUID, error) {
	currentUserID := s.session.Values[userIdSessionKey]
	if currentUserID == nil {
		return nil, errors.New("User is not logged in")
	}

	uid, err := uuid.Parse(currentUserID.(string))
	if err != nil {
		return nil, err
	}
	return &uid, nil
}

func (s *SessionService) SetCurrentUserId(userId uuid.UUID) error {
	s.session.Values[userIdSessionKey] = userId
	return s.save()
}

func (s *SessionService) RemoveCurrentUserId() error {
	delete(s.session.Values, userIdSessionKey)
	return s.save()
}
