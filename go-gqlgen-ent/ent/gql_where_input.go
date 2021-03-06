// Code generated by entc, DO NOT EDIT.

package ent

import (
	"errors"
	"fmt"
	"go-gqlgen-ent/ent/article"
	"go-gqlgen-ent/ent/predicate"
	"go-gqlgen-ent/ent/user"
	"time"

	"github.com/google/uuid"
)

// ArticleWhereInput represents a where input for filtering Article queries.
type ArticleWhereInput struct {
	Predicates []predicate.Article  `json:"-"`
	Not        *ArticleWhereInput   `json:"not,omitempty"`
	Or         []*ArticleWhereInput `json:"or,omitempty"`
	And        []*ArticleWhereInput `json:"and,omitempty"`

	// "id" field predicates.
	ID      *uuid.UUID  `json:"id,omitempty"`
	IDNEQ   *uuid.UUID  `json:"idNEQ,omitempty"`
	IDIn    []uuid.UUID `json:"idIn,omitempty"`
	IDNotIn []uuid.UUID `json:"idNotIn,omitempty"`
	IDGT    *uuid.UUID  `json:"idGT,omitempty"`
	IDGTE   *uuid.UUID  `json:"idGTE,omitempty"`
	IDLT    *uuid.UUID  `json:"idLT,omitempty"`
	IDLTE   *uuid.UUID  `json:"idLTE,omitempty"`

	// "title" field predicates.
	Title             *string  `json:"title,omitempty"`
	TitleNEQ          *string  `json:"titleNEQ,omitempty"`
	TitleIn           []string `json:"titleIn,omitempty"`
	TitleNotIn        []string `json:"titleNotIn,omitempty"`
	TitleGT           *string  `json:"titleGT,omitempty"`
	TitleGTE          *string  `json:"titleGTE,omitempty"`
	TitleLT           *string  `json:"titleLT,omitempty"`
	TitleLTE          *string  `json:"titleLTE,omitempty"`
	TitleContains     *string  `json:"titleContains,omitempty"`
	TitleHasPrefix    *string  `json:"titleHasPrefix,omitempty"`
	TitleHasSuffix    *string  `json:"titleHasSuffix,omitempty"`
	TitleEqualFold    *string  `json:"titleEqualFold,omitempty"`
	TitleContainsFold *string  `json:"titleContainsFold,omitempty"`

	// "body" field predicates.
	Body             *string  `json:"body,omitempty"`
	BodyNEQ          *string  `json:"bodyNEQ,omitempty"`
	BodyIn           []string `json:"bodyIn,omitempty"`
	BodyNotIn        []string `json:"bodyNotIn,omitempty"`
	BodyGT           *string  `json:"bodyGT,omitempty"`
	BodyGTE          *string  `json:"bodyGTE,omitempty"`
	BodyLT           *string  `json:"bodyLT,omitempty"`
	BodyLTE          *string  `json:"bodyLTE,omitempty"`
	BodyContains     *string  `json:"bodyContains,omitempty"`
	BodyHasPrefix    *string  `json:"bodyHasPrefix,omitempty"`
	BodyHasSuffix    *string  `json:"bodyHasSuffix,omitempty"`
	BodyEqualFold    *string  `json:"bodyEqualFold,omitempty"`
	BodyContainsFold *string  `json:"bodyContainsFold,omitempty"`

	// "createdAt" field predicates.
	CreatedAt      *time.Time  `json:"createdat,omitempty"`
	CreatedAtNEQ   *time.Time  `json:"createdatNEQ,omitempty"`
	CreatedAtIn    []time.Time `json:"createdatIn,omitempty"`
	CreatedAtNotIn []time.Time `json:"createdatNotIn,omitempty"`
	CreatedAtGT    *time.Time  `json:"createdatGT,omitempty"`
	CreatedAtGTE   *time.Time  `json:"createdatGTE,omitempty"`
	CreatedAtLT    *time.Time  `json:"createdatLT,omitempty"`
	CreatedAtLTE   *time.Time  `json:"createdatLTE,omitempty"`

	// "updatedAt" field predicates.
	UpdatedAt      *time.Time  `json:"updatedat,omitempty"`
	UpdatedAtNEQ   *time.Time  `json:"updatedatNEQ,omitempty"`
	UpdatedAtIn    []time.Time `json:"updatedatIn,omitempty"`
	UpdatedAtNotIn []time.Time `json:"updatedatNotIn,omitempty"`
	UpdatedAtGT    *time.Time  `json:"updatedatGT,omitempty"`
	UpdatedAtGTE   *time.Time  `json:"updatedatGTE,omitempty"`
	UpdatedAtLT    *time.Time  `json:"updatedatLT,omitempty"`
	UpdatedAtLTE   *time.Time  `json:"updatedatLTE,omitempty"`

	// "author" edge predicates.
	HasAuthor     *bool             `json:"hasAuthor,omitempty"`
	HasAuthorWith []*UserWhereInput `json:"hasAuthorWith,omitempty"`

	// "likedUsers" edge predicates.
	HasLikedUsers     *bool             `json:"hasLikedUsers,omitempty"`
	HasLikedUsersWith []*UserWhereInput `json:"hasLikedUsersWith,omitempty"`
}

// AddPredicates adds custom predicates to the where input to be used during the filtering phase.
func (i *ArticleWhereInput) AddPredicates(predicates ...predicate.Article) {
	i.Predicates = append(i.Predicates, predicates...)
}

// Filter applies the ArticleWhereInput filter on the ArticleQuery builder.
func (i *ArticleWhereInput) Filter(q *ArticleQuery) (*ArticleQuery, error) {
	if i == nil {
		return q, nil
	}
	p, err := i.P()
	if err != nil {
		if err == ErrEmptyArticleWhereInput {
			return q, nil
		}
		return nil, err
	}
	return q.Where(p), nil
}

// ErrEmptyArticleWhereInput is returned in case the ArticleWhereInput is empty.
var ErrEmptyArticleWhereInput = errors.New("ent: empty predicate ArticleWhereInput")

// P returns a predicate for filtering articles.
// An error is returned if the input is empty or invalid.
func (i *ArticleWhereInput) P() (predicate.Article, error) {
	var predicates []predicate.Article
	if i.Not != nil {
		p, err := i.Not.P()
		if err != nil {
			return nil, fmt.Errorf("%w: field 'not'", err)
		}
		predicates = append(predicates, article.Not(p))
	}
	switch n := len(i.Or); {
	case n == 1:
		p, err := i.Or[0].P()
		if err != nil {
			return nil, fmt.Errorf("%w: field 'or'", err)
		}
		predicates = append(predicates, p)
	case n > 1:
		or := make([]predicate.Article, 0, n)
		for _, w := range i.Or {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'or'", err)
			}
			or = append(or, p)
		}
		predicates = append(predicates, article.Or(or...))
	}
	switch n := len(i.And); {
	case n == 1:
		p, err := i.And[0].P()
		if err != nil {
			return nil, fmt.Errorf("%w: field 'and'", err)
		}
		predicates = append(predicates, p)
	case n > 1:
		and := make([]predicate.Article, 0, n)
		for _, w := range i.And {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'and'", err)
			}
			and = append(and, p)
		}
		predicates = append(predicates, article.And(and...))
	}
	predicates = append(predicates, i.Predicates...)
	if i.ID != nil {
		predicates = append(predicates, article.IDEQ(*i.ID))
	}
	if i.IDNEQ != nil {
		predicates = append(predicates, article.IDNEQ(*i.IDNEQ))
	}
	if len(i.IDIn) > 0 {
		predicates = append(predicates, article.IDIn(i.IDIn...))
	}
	if len(i.IDNotIn) > 0 {
		predicates = append(predicates, article.IDNotIn(i.IDNotIn...))
	}
	if i.IDGT != nil {
		predicates = append(predicates, article.IDGT(*i.IDGT))
	}
	if i.IDGTE != nil {
		predicates = append(predicates, article.IDGTE(*i.IDGTE))
	}
	if i.IDLT != nil {
		predicates = append(predicates, article.IDLT(*i.IDLT))
	}
	if i.IDLTE != nil {
		predicates = append(predicates, article.IDLTE(*i.IDLTE))
	}
	if i.Title != nil {
		predicates = append(predicates, article.TitleEQ(*i.Title))
	}
	if i.TitleNEQ != nil {
		predicates = append(predicates, article.TitleNEQ(*i.TitleNEQ))
	}
	if len(i.TitleIn) > 0 {
		predicates = append(predicates, article.TitleIn(i.TitleIn...))
	}
	if len(i.TitleNotIn) > 0 {
		predicates = append(predicates, article.TitleNotIn(i.TitleNotIn...))
	}
	if i.TitleGT != nil {
		predicates = append(predicates, article.TitleGT(*i.TitleGT))
	}
	if i.TitleGTE != nil {
		predicates = append(predicates, article.TitleGTE(*i.TitleGTE))
	}
	if i.TitleLT != nil {
		predicates = append(predicates, article.TitleLT(*i.TitleLT))
	}
	if i.TitleLTE != nil {
		predicates = append(predicates, article.TitleLTE(*i.TitleLTE))
	}
	if i.TitleContains != nil {
		predicates = append(predicates, article.TitleContains(*i.TitleContains))
	}
	if i.TitleHasPrefix != nil {
		predicates = append(predicates, article.TitleHasPrefix(*i.TitleHasPrefix))
	}
	if i.TitleHasSuffix != nil {
		predicates = append(predicates, article.TitleHasSuffix(*i.TitleHasSuffix))
	}
	if i.TitleEqualFold != nil {
		predicates = append(predicates, article.TitleEqualFold(*i.TitleEqualFold))
	}
	if i.TitleContainsFold != nil {
		predicates = append(predicates, article.TitleContainsFold(*i.TitleContainsFold))
	}
	if i.Body != nil {
		predicates = append(predicates, article.BodyEQ(*i.Body))
	}
	if i.BodyNEQ != nil {
		predicates = append(predicates, article.BodyNEQ(*i.BodyNEQ))
	}
	if len(i.BodyIn) > 0 {
		predicates = append(predicates, article.BodyIn(i.BodyIn...))
	}
	if len(i.BodyNotIn) > 0 {
		predicates = append(predicates, article.BodyNotIn(i.BodyNotIn...))
	}
	if i.BodyGT != nil {
		predicates = append(predicates, article.BodyGT(*i.BodyGT))
	}
	if i.BodyGTE != nil {
		predicates = append(predicates, article.BodyGTE(*i.BodyGTE))
	}
	if i.BodyLT != nil {
		predicates = append(predicates, article.BodyLT(*i.BodyLT))
	}
	if i.BodyLTE != nil {
		predicates = append(predicates, article.BodyLTE(*i.BodyLTE))
	}
	if i.BodyContains != nil {
		predicates = append(predicates, article.BodyContains(*i.BodyContains))
	}
	if i.BodyHasPrefix != nil {
		predicates = append(predicates, article.BodyHasPrefix(*i.BodyHasPrefix))
	}
	if i.BodyHasSuffix != nil {
		predicates = append(predicates, article.BodyHasSuffix(*i.BodyHasSuffix))
	}
	if i.BodyEqualFold != nil {
		predicates = append(predicates, article.BodyEqualFold(*i.BodyEqualFold))
	}
	if i.BodyContainsFold != nil {
		predicates = append(predicates, article.BodyContainsFold(*i.BodyContainsFold))
	}
	if i.CreatedAt != nil {
		predicates = append(predicates, article.CreatedAtEQ(*i.CreatedAt))
	}
	if i.CreatedAtNEQ != nil {
		predicates = append(predicates, article.CreatedAtNEQ(*i.CreatedAtNEQ))
	}
	if len(i.CreatedAtIn) > 0 {
		predicates = append(predicates, article.CreatedAtIn(i.CreatedAtIn...))
	}
	if len(i.CreatedAtNotIn) > 0 {
		predicates = append(predicates, article.CreatedAtNotIn(i.CreatedAtNotIn...))
	}
	if i.CreatedAtGT != nil {
		predicates = append(predicates, article.CreatedAtGT(*i.CreatedAtGT))
	}
	if i.CreatedAtGTE != nil {
		predicates = append(predicates, article.CreatedAtGTE(*i.CreatedAtGTE))
	}
	if i.CreatedAtLT != nil {
		predicates = append(predicates, article.CreatedAtLT(*i.CreatedAtLT))
	}
	if i.CreatedAtLTE != nil {
		predicates = append(predicates, article.CreatedAtLTE(*i.CreatedAtLTE))
	}
	if i.UpdatedAt != nil {
		predicates = append(predicates, article.UpdatedAtEQ(*i.UpdatedAt))
	}
	if i.UpdatedAtNEQ != nil {
		predicates = append(predicates, article.UpdatedAtNEQ(*i.UpdatedAtNEQ))
	}
	if len(i.UpdatedAtIn) > 0 {
		predicates = append(predicates, article.UpdatedAtIn(i.UpdatedAtIn...))
	}
	if len(i.UpdatedAtNotIn) > 0 {
		predicates = append(predicates, article.UpdatedAtNotIn(i.UpdatedAtNotIn...))
	}
	if i.UpdatedAtGT != nil {
		predicates = append(predicates, article.UpdatedAtGT(*i.UpdatedAtGT))
	}
	if i.UpdatedAtGTE != nil {
		predicates = append(predicates, article.UpdatedAtGTE(*i.UpdatedAtGTE))
	}
	if i.UpdatedAtLT != nil {
		predicates = append(predicates, article.UpdatedAtLT(*i.UpdatedAtLT))
	}
	if i.UpdatedAtLTE != nil {
		predicates = append(predicates, article.UpdatedAtLTE(*i.UpdatedAtLTE))
	}

	if i.HasAuthor != nil {
		p := article.HasAuthor()
		if !*i.HasAuthor {
			p = article.Not(p)
		}
		predicates = append(predicates, p)
	}
	if len(i.HasAuthorWith) > 0 {
		with := make([]predicate.User, 0, len(i.HasAuthorWith))
		for _, w := range i.HasAuthorWith {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'HasAuthorWith'", err)
			}
			with = append(with, p)
		}
		predicates = append(predicates, article.HasAuthorWith(with...))
	}
	if i.HasLikedUsers != nil {
		p := article.HasLikedUsers()
		if !*i.HasLikedUsers {
			p = article.Not(p)
		}
		predicates = append(predicates, p)
	}
	if len(i.HasLikedUsersWith) > 0 {
		with := make([]predicate.User, 0, len(i.HasLikedUsersWith))
		for _, w := range i.HasLikedUsersWith {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'HasLikedUsersWith'", err)
			}
			with = append(with, p)
		}
		predicates = append(predicates, article.HasLikedUsersWith(with...))
	}
	switch len(predicates) {
	case 0:
		return nil, ErrEmptyArticleWhereInput
	case 1:
		return predicates[0], nil
	default:
		return article.And(predicates...), nil
	}
}

// UserWhereInput represents a where input for filtering User queries.
type UserWhereInput struct {
	Predicates []predicate.User  `json:"-"`
	Not        *UserWhereInput   `json:"not,omitempty"`
	Or         []*UserWhereInput `json:"or,omitempty"`
	And        []*UserWhereInput `json:"and,omitempty"`

	// "id" field predicates.
	ID      *uuid.UUID  `json:"id,omitempty"`
	IDNEQ   *uuid.UUID  `json:"idNEQ,omitempty"`
	IDIn    []uuid.UUID `json:"idIn,omitempty"`
	IDNotIn []uuid.UUID `json:"idNotIn,omitempty"`
	IDGT    *uuid.UUID  `json:"idGT,omitempty"`
	IDGTE   *uuid.UUID  `json:"idGTE,omitempty"`
	IDLT    *uuid.UUID  `json:"idLT,omitempty"`
	IDLTE   *uuid.UUID  `json:"idLTE,omitempty"`

	// "name" field predicates.
	Name             *string  `json:"name,omitempty"`
	NameNEQ          *string  `json:"nameNEQ,omitempty"`
	NameIn           []string `json:"nameIn,omitempty"`
	NameNotIn        []string `json:"nameNotIn,omitempty"`
	NameGT           *string  `json:"nameGT,omitempty"`
	NameGTE          *string  `json:"nameGTE,omitempty"`
	NameLT           *string  `json:"nameLT,omitempty"`
	NameLTE          *string  `json:"nameLTE,omitempty"`
	NameContains     *string  `json:"nameContains,omitempty"`
	NameHasPrefix    *string  `json:"nameHasPrefix,omitempty"`
	NameHasSuffix    *string  `json:"nameHasSuffix,omitempty"`
	NameEqualFold    *string  `json:"nameEqualFold,omitempty"`
	NameContainsFold *string  `json:"nameContainsFold,omitempty"`

	// "email" field predicates.
	Email             *string  `json:"email,omitempty"`
	EmailNEQ          *string  `json:"emailNEQ,omitempty"`
	EmailIn           []string `json:"emailIn,omitempty"`
	EmailNotIn        []string `json:"emailNotIn,omitempty"`
	EmailGT           *string  `json:"emailGT,omitempty"`
	EmailGTE          *string  `json:"emailGTE,omitempty"`
	EmailLT           *string  `json:"emailLT,omitempty"`
	EmailLTE          *string  `json:"emailLTE,omitempty"`
	EmailContains     *string  `json:"emailContains,omitempty"`
	EmailHasPrefix    *string  `json:"emailHasPrefix,omitempty"`
	EmailHasSuffix    *string  `json:"emailHasSuffix,omitempty"`
	EmailEqualFold    *string  `json:"emailEqualFold,omitempty"`
	EmailContainsFold *string  `json:"emailContainsFold,omitempty"`

	// "passwordHash" field predicates.
	PasswordHash             *string  `json:"passwordhash,omitempty"`
	PasswordHashNEQ          *string  `json:"passwordhashNEQ,omitempty"`
	PasswordHashIn           []string `json:"passwordhashIn,omitempty"`
	PasswordHashNotIn        []string `json:"passwordhashNotIn,omitempty"`
	PasswordHashGT           *string  `json:"passwordhashGT,omitempty"`
	PasswordHashGTE          *string  `json:"passwordhashGTE,omitempty"`
	PasswordHashLT           *string  `json:"passwordhashLT,omitempty"`
	PasswordHashLTE          *string  `json:"passwordhashLTE,omitempty"`
	PasswordHashContains     *string  `json:"passwordhashContains,omitempty"`
	PasswordHashHasPrefix    *string  `json:"passwordhashHasPrefix,omitempty"`
	PasswordHashHasSuffix    *string  `json:"passwordhashHasSuffix,omitempty"`
	PasswordHashEqualFold    *string  `json:"passwordhashEqualFold,omitempty"`
	PasswordHashContainsFold *string  `json:"passwordhashContainsFold,omitempty"`

	// "articles" edge predicates.
	HasArticles     *bool                `json:"hasArticles,omitempty"`
	HasArticlesWith []*ArticleWhereInput `json:"hasArticlesWith,omitempty"`

	// "likedArticles" edge predicates.
	HasLikedArticles     *bool                `json:"hasLikedArticles,omitempty"`
	HasLikedArticlesWith []*ArticleWhereInput `json:"hasLikedArticlesWith,omitempty"`
}

// AddPredicates adds custom predicates to the where input to be used during the filtering phase.
func (i *UserWhereInput) AddPredicates(predicates ...predicate.User) {
	i.Predicates = append(i.Predicates, predicates...)
}

// Filter applies the UserWhereInput filter on the UserQuery builder.
func (i *UserWhereInput) Filter(q *UserQuery) (*UserQuery, error) {
	if i == nil {
		return q, nil
	}
	p, err := i.P()
	if err != nil {
		if err == ErrEmptyUserWhereInput {
			return q, nil
		}
		return nil, err
	}
	return q.Where(p), nil
}

// ErrEmptyUserWhereInput is returned in case the UserWhereInput is empty.
var ErrEmptyUserWhereInput = errors.New("ent: empty predicate UserWhereInput")

// P returns a predicate for filtering users.
// An error is returned if the input is empty or invalid.
func (i *UserWhereInput) P() (predicate.User, error) {
	var predicates []predicate.User
	if i.Not != nil {
		p, err := i.Not.P()
		if err != nil {
			return nil, fmt.Errorf("%w: field 'not'", err)
		}
		predicates = append(predicates, user.Not(p))
	}
	switch n := len(i.Or); {
	case n == 1:
		p, err := i.Or[0].P()
		if err != nil {
			return nil, fmt.Errorf("%w: field 'or'", err)
		}
		predicates = append(predicates, p)
	case n > 1:
		or := make([]predicate.User, 0, n)
		for _, w := range i.Or {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'or'", err)
			}
			or = append(or, p)
		}
		predicates = append(predicates, user.Or(or...))
	}
	switch n := len(i.And); {
	case n == 1:
		p, err := i.And[0].P()
		if err != nil {
			return nil, fmt.Errorf("%w: field 'and'", err)
		}
		predicates = append(predicates, p)
	case n > 1:
		and := make([]predicate.User, 0, n)
		for _, w := range i.And {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'and'", err)
			}
			and = append(and, p)
		}
		predicates = append(predicates, user.And(and...))
	}
	predicates = append(predicates, i.Predicates...)
	if i.ID != nil {
		predicates = append(predicates, user.IDEQ(*i.ID))
	}
	if i.IDNEQ != nil {
		predicates = append(predicates, user.IDNEQ(*i.IDNEQ))
	}
	if len(i.IDIn) > 0 {
		predicates = append(predicates, user.IDIn(i.IDIn...))
	}
	if len(i.IDNotIn) > 0 {
		predicates = append(predicates, user.IDNotIn(i.IDNotIn...))
	}
	if i.IDGT != nil {
		predicates = append(predicates, user.IDGT(*i.IDGT))
	}
	if i.IDGTE != nil {
		predicates = append(predicates, user.IDGTE(*i.IDGTE))
	}
	if i.IDLT != nil {
		predicates = append(predicates, user.IDLT(*i.IDLT))
	}
	if i.IDLTE != nil {
		predicates = append(predicates, user.IDLTE(*i.IDLTE))
	}
	if i.Name != nil {
		predicates = append(predicates, user.NameEQ(*i.Name))
	}
	if i.NameNEQ != nil {
		predicates = append(predicates, user.NameNEQ(*i.NameNEQ))
	}
	if len(i.NameIn) > 0 {
		predicates = append(predicates, user.NameIn(i.NameIn...))
	}
	if len(i.NameNotIn) > 0 {
		predicates = append(predicates, user.NameNotIn(i.NameNotIn...))
	}
	if i.NameGT != nil {
		predicates = append(predicates, user.NameGT(*i.NameGT))
	}
	if i.NameGTE != nil {
		predicates = append(predicates, user.NameGTE(*i.NameGTE))
	}
	if i.NameLT != nil {
		predicates = append(predicates, user.NameLT(*i.NameLT))
	}
	if i.NameLTE != nil {
		predicates = append(predicates, user.NameLTE(*i.NameLTE))
	}
	if i.NameContains != nil {
		predicates = append(predicates, user.NameContains(*i.NameContains))
	}
	if i.NameHasPrefix != nil {
		predicates = append(predicates, user.NameHasPrefix(*i.NameHasPrefix))
	}
	if i.NameHasSuffix != nil {
		predicates = append(predicates, user.NameHasSuffix(*i.NameHasSuffix))
	}
	if i.NameEqualFold != nil {
		predicates = append(predicates, user.NameEqualFold(*i.NameEqualFold))
	}
	if i.NameContainsFold != nil {
		predicates = append(predicates, user.NameContainsFold(*i.NameContainsFold))
	}
	if i.Email != nil {
		predicates = append(predicates, user.EmailEQ(*i.Email))
	}
	if i.EmailNEQ != nil {
		predicates = append(predicates, user.EmailNEQ(*i.EmailNEQ))
	}
	if len(i.EmailIn) > 0 {
		predicates = append(predicates, user.EmailIn(i.EmailIn...))
	}
	if len(i.EmailNotIn) > 0 {
		predicates = append(predicates, user.EmailNotIn(i.EmailNotIn...))
	}
	if i.EmailGT != nil {
		predicates = append(predicates, user.EmailGT(*i.EmailGT))
	}
	if i.EmailGTE != nil {
		predicates = append(predicates, user.EmailGTE(*i.EmailGTE))
	}
	if i.EmailLT != nil {
		predicates = append(predicates, user.EmailLT(*i.EmailLT))
	}
	if i.EmailLTE != nil {
		predicates = append(predicates, user.EmailLTE(*i.EmailLTE))
	}
	if i.EmailContains != nil {
		predicates = append(predicates, user.EmailContains(*i.EmailContains))
	}
	if i.EmailHasPrefix != nil {
		predicates = append(predicates, user.EmailHasPrefix(*i.EmailHasPrefix))
	}
	if i.EmailHasSuffix != nil {
		predicates = append(predicates, user.EmailHasSuffix(*i.EmailHasSuffix))
	}
	if i.EmailEqualFold != nil {
		predicates = append(predicates, user.EmailEqualFold(*i.EmailEqualFold))
	}
	if i.EmailContainsFold != nil {
		predicates = append(predicates, user.EmailContainsFold(*i.EmailContainsFold))
	}
	if i.PasswordHash != nil {
		predicates = append(predicates, user.PasswordHashEQ(*i.PasswordHash))
	}
	if i.PasswordHashNEQ != nil {
		predicates = append(predicates, user.PasswordHashNEQ(*i.PasswordHashNEQ))
	}
	if len(i.PasswordHashIn) > 0 {
		predicates = append(predicates, user.PasswordHashIn(i.PasswordHashIn...))
	}
	if len(i.PasswordHashNotIn) > 0 {
		predicates = append(predicates, user.PasswordHashNotIn(i.PasswordHashNotIn...))
	}
	if i.PasswordHashGT != nil {
		predicates = append(predicates, user.PasswordHashGT(*i.PasswordHashGT))
	}
	if i.PasswordHashGTE != nil {
		predicates = append(predicates, user.PasswordHashGTE(*i.PasswordHashGTE))
	}
	if i.PasswordHashLT != nil {
		predicates = append(predicates, user.PasswordHashLT(*i.PasswordHashLT))
	}
	if i.PasswordHashLTE != nil {
		predicates = append(predicates, user.PasswordHashLTE(*i.PasswordHashLTE))
	}
	if i.PasswordHashContains != nil {
		predicates = append(predicates, user.PasswordHashContains(*i.PasswordHashContains))
	}
	if i.PasswordHashHasPrefix != nil {
		predicates = append(predicates, user.PasswordHashHasPrefix(*i.PasswordHashHasPrefix))
	}
	if i.PasswordHashHasSuffix != nil {
		predicates = append(predicates, user.PasswordHashHasSuffix(*i.PasswordHashHasSuffix))
	}
	if i.PasswordHashEqualFold != nil {
		predicates = append(predicates, user.PasswordHashEqualFold(*i.PasswordHashEqualFold))
	}
	if i.PasswordHashContainsFold != nil {
		predicates = append(predicates, user.PasswordHashContainsFold(*i.PasswordHashContainsFold))
	}

	if i.HasArticles != nil {
		p := user.HasArticles()
		if !*i.HasArticles {
			p = user.Not(p)
		}
		predicates = append(predicates, p)
	}
	if len(i.HasArticlesWith) > 0 {
		with := make([]predicate.Article, 0, len(i.HasArticlesWith))
		for _, w := range i.HasArticlesWith {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'HasArticlesWith'", err)
			}
			with = append(with, p)
		}
		predicates = append(predicates, user.HasArticlesWith(with...))
	}
	if i.HasLikedArticles != nil {
		p := user.HasLikedArticles()
		if !*i.HasLikedArticles {
			p = user.Not(p)
		}
		predicates = append(predicates, p)
	}
	if len(i.HasLikedArticlesWith) > 0 {
		with := make([]predicate.Article, 0, len(i.HasLikedArticlesWith))
		for _, w := range i.HasLikedArticlesWith {
			p, err := w.P()
			if err != nil {
				return nil, fmt.Errorf("%w: field 'HasLikedArticlesWith'", err)
			}
			with = append(with, p)
		}
		predicates = append(predicates, user.HasLikedArticlesWith(with...))
	}
	switch len(predicates) {
	case 0:
		return nil, ErrEmptyUserWhereInput
	case 1:
		return predicates[0], nil
	default:
		return user.And(predicates...), nil
	}
}
