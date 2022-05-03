package auth

type SessionService struct {
	GetCurrentUserId    func() string
	SetCurrentUserId    func(userId string)
	RemoveCurrentUserId func()
}
