// Code generated by entc, DO NOT EDIT.

package ent

import "context"

func (a *Article) Author(ctx context.Context) (*User, error) {
	result, err := a.Edges.AuthorOrErr()
	if IsNotLoaded(err) {
		result, err = a.QueryAuthor().Only(ctx)
	}
	return result, MaskNotFound(err)
}

func (u *User) Articles(ctx context.Context) ([]*Article, error) {
	result, err := u.Edges.ArticlesOrErr()
	if IsNotLoaded(err) {
		result, err = u.QueryArticles().All(ctx)
	}
	return result, err
}