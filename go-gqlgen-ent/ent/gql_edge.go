// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"

	"github.com/99designs/gqlgen/graphql"
)

func (a *Article) Author(ctx context.Context) (*User, error) {
	result, err := a.Edges.AuthorOrErr()
	if IsNotLoaded(err) {
		result, err = a.QueryAuthor().Only(ctx)
	}
	return result, MaskNotFound(err)
}

func (a *Article) LikedUsers(ctx context.Context) ([]*User, error) {
	result, err := a.Edges.LikedUsersOrErr()
	if IsNotLoaded(err) {
		result, err = a.QueryLikedUsers().All(ctx)
	}
	return result, err
}

func (u *User) Articles(
	ctx context.Context, after *Cursor, first *int, before *Cursor, last *int,
) (*ArticleConnection, error) {
	opts := []ArticlePaginateOption{}
	totalCount := u.Edges.totalCount[0]
	if nodes, err := u.Edges.ArticlesOrErr(); err == nil || totalCount != nil {
		conn := &ArticleConnection{Edges: []*ArticleEdge{}}
		if totalCount != nil {
			conn.TotalCount = *totalCount
		}
		pager, err := newArticlePager(opts)
		if err != nil {
			return nil, err
		}
		conn.build(nodes, pager, after, first, before, last)
		return conn, nil
	}
	query := u.QueryArticles()
	if err := validateFirstLast(first, last); err != nil {
		return nil, err
	}
	pager, err := newArticlePager(opts)
	if err != nil {
		return nil, err
	}
	if query, err = pager.applyFilter(query); err != nil {
		return nil, err
	}
	conn := &ArticleConnection{Edges: []*ArticleEdge{}}
	if !hasCollectedField(ctx, edgesField) || first != nil && *first == 0 || last != nil && *last == 0 {
		if hasCollectedField(ctx, totalCountField) || hasCollectedField(ctx, pageInfoField) {
			if totalCount != nil {
				conn.TotalCount = *totalCount
			} else if conn.TotalCount, err = query.Count(ctx); err != nil {
				return nil, err
			}
			conn.PageInfo.HasNextPage = first != nil && conn.TotalCount > 0
			conn.PageInfo.HasPreviousPage = last != nil && conn.TotalCount > 0
		}
		return conn, nil
	}

	if (after != nil || first != nil || before != nil || last != nil) && hasCollectedField(ctx, totalCountField) {
		count, err := query.Clone().Count(ctx)
		if err != nil {
			return nil, err
		}
		conn.TotalCount = count
	}

	query = pager.applyCursors(query, after, before)
	query = pager.applyOrder(query, last != nil)
	if limit := paginateLimit(first, last); limit != 0 {
		query.Limit(limit)
	}
	if field := collectedField(ctx, edgesField, nodeField); field != nil {
		if err := query.collectField(ctx, graphql.GetOperationContext(ctx), *field, []string{edgesField, nodeField}); err != nil {
			return nil, err
		}
	}

	nodes, err := query.All(ctx)
	if err != nil || len(nodes) == 0 {
		return conn, err
	}
	conn.build(nodes, pager, after, first, before, last)
	return conn, nil
}

func (u *User) LikedArticles(
	ctx context.Context, after *Cursor, first *int, before *Cursor, last *int,
) (*ArticleConnection, error) {
	opts := []ArticlePaginateOption{}
	totalCount := u.Edges.totalCount[1]
	if nodes, err := u.Edges.LikedArticlesOrErr(); err == nil || totalCount != nil {
		conn := &ArticleConnection{Edges: []*ArticleEdge{}}
		if totalCount != nil {
			conn.TotalCount = *totalCount
		}
		pager, err := newArticlePager(opts)
		if err != nil {
			return nil, err
		}
		conn.build(nodes, pager, after, first, before, last)
		return conn, nil
	}
	query := u.QueryLikedArticles()
	if err := validateFirstLast(first, last); err != nil {
		return nil, err
	}
	pager, err := newArticlePager(opts)
	if err != nil {
		return nil, err
	}
	if query, err = pager.applyFilter(query); err != nil {
		return nil, err
	}
	conn := &ArticleConnection{Edges: []*ArticleEdge{}}
	if !hasCollectedField(ctx, edgesField) || first != nil && *first == 0 || last != nil && *last == 0 {
		if hasCollectedField(ctx, totalCountField) || hasCollectedField(ctx, pageInfoField) {
			if totalCount != nil {
				conn.TotalCount = *totalCount
			} else if conn.TotalCount, err = query.Count(ctx); err != nil {
				return nil, err
			}
			conn.PageInfo.HasNextPage = first != nil && conn.TotalCount > 0
			conn.PageInfo.HasPreviousPage = last != nil && conn.TotalCount > 0
		}
		return conn, nil
	}

	if (after != nil || first != nil || before != nil || last != nil) && hasCollectedField(ctx, totalCountField) {
		count, err := query.Clone().Count(ctx)
		if err != nil {
			return nil, err
		}
		conn.TotalCount = count
	}

	query = pager.applyCursors(query, after, before)
	query = pager.applyOrder(query, last != nil)
	if limit := paginateLimit(first, last); limit != 0 {
		query.Limit(limit)
	}
	if field := collectedField(ctx, edgesField, nodeField); field != nil {
		if err := query.collectField(ctx, graphql.GetOperationContext(ctx), *field, []string{edgesField, nodeField}); err != nil {
			return nil, err
		}
	}

	nodes, err := query.All(ctx)
	if err != nil || len(nodes) == 0 {
		return conn, err
	}
	conn.build(nodes, pager, after, first, before, last)
	return conn, nil
}
