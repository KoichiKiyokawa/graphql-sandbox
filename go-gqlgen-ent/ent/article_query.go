// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"database/sql/driver"
	"fmt"
	"go-gqlgen-ent/ent/article"
	"go-gqlgen-ent/ent/predicate"
	"go-gqlgen-ent/ent/user"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// ArticleQuery is the builder for querying Article entities.
type ArticleQuery struct {
	config
	limit      *int
	offset     *int
	unique     *bool
	order      []OrderFunc
	fields     []string
	predicates []predicate.Article
	// eager-loading edges.
	withAuthor     *UserQuery
	withLikedUsers *UserQuery
	withFKs        bool
	modifiers      []func(*sql.Selector)
	loadTotal      []func(context.Context, []*Article) error
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the ArticleQuery builder.
func (aq *ArticleQuery) Where(ps ...predicate.Article) *ArticleQuery {
	aq.predicates = append(aq.predicates, ps...)
	return aq
}

// Limit adds a limit step to the query.
func (aq *ArticleQuery) Limit(limit int) *ArticleQuery {
	aq.limit = &limit
	return aq
}

// Offset adds an offset step to the query.
func (aq *ArticleQuery) Offset(offset int) *ArticleQuery {
	aq.offset = &offset
	return aq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (aq *ArticleQuery) Unique(unique bool) *ArticleQuery {
	aq.unique = &unique
	return aq
}

// Order adds an order step to the query.
func (aq *ArticleQuery) Order(o ...OrderFunc) *ArticleQuery {
	aq.order = append(aq.order, o...)
	return aq
}

// QueryAuthor chains the current query on the "author" edge.
func (aq *ArticleQuery) QueryAuthor() *UserQuery {
	query := &UserQuery{config: aq.config}
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := aq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := aq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(article.Table, article.FieldID, selector),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, false, article.AuthorTable, article.AuthorColumn),
		)
		fromU = sqlgraph.SetNeighbors(aq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// QueryLikedUsers chains the current query on the "likedUsers" edge.
func (aq *ArticleQuery) QueryLikedUsers() *UserQuery {
	query := &UserQuery{config: aq.config}
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := aq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := aq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(article.Table, article.FieldID, selector),
			sqlgraph.To(user.Table, user.FieldID),
			sqlgraph.Edge(sqlgraph.M2M, true, article.LikedUsersTable, article.LikedUsersPrimaryKey...),
		)
		fromU = sqlgraph.SetNeighbors(aq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first Article entity from the query.
// Returns a *NotFoundError when no Article was found.
func (aq *ArticleQuery) First(ctx context.Context) (*Article, error) {
	nodes, err := aq.Limit(1).All(ctx)
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{article.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (aq *ArticleQuery) FirstX(ctx context.Context) *Article {
	node, err := aq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first Article ID from the query.
// Returns a *NotFoundError when no Article ID was found.
func (aq *ArticleQuery) FirstID(ctx context.Context) (id uuid.UUID, err error) {
	var ids []uuid.UUID
	if ids, err = aq.Limit(1).IDs(ctx); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{article.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (aq *ArticleQuery) FirstIDX(ctx context.Context) uuid.UUID {
	id, err := aq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single Article entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one Article entity is found.
// Returns a *NotFoundError when no Article entities are found.
func (aq *ArticleQuery) Only(ctx context.Context) (*Article, error) {
	nodes, err := aq.Limit(2).All(ctx)
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{article.Label}
	default:
		return nil, &NotSingularError{article.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (aq *ArticleQuery) OnlyX(ctx context.Context) *Article {
	node, err := aq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only Article ID in the query.
// Returns a *NotSingularError when more than one Article ID is found.
// Returns a *NotFoundError when no entities are found.
func (aq *ArticleQuery) OnlyID(ctx context.Context) (id uuid.UUID, err error) {
	var ids []uuid.UUID
	if ids, err = aq.Limit(2).IDs(ctx); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{article.Label}
	default:
		err = &NotSingularError{article.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (aq *ArticleQuery) OnlyIDX(ctx context.Context) uuid.UUID {
	id, err := aq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of Articles.
func (aq *ArticleQuery) All(ctx context.Context) ([]*Article, error) {
	if err := aq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	return aq.sqlAll(ctx)
}

// AllX is like All, but panics if an error occurs.
func (aq *ArticleQuery) AllX(ctx context.Context) []*Article {
	nodes, err := aq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of Article IDs.
func (aq *ArticleQuery) IDs(ctx context.Context) ([]uuid.UUID, error) {
	var ids []uuid.UUID
	if err := aq.Select(article.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (aq *ArticleQuery) IDsX(ctx context.Context) []uuid.UUID {
	ids, err := aq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (aq *ArticleQuery) Count(ctx context.Context) (int, error) {
	if err := aq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return aq.sqlCount(ctx)
}

// CountX is like Count, but panics if an error occurs.
func (aq *ArticleQuery) CountX(ctx context.Context) int {
	count, err := aq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (aq *ArticleQuery) Exist(ctx context.Context) (bool, error) {
	if err := aq.prepareQuery(ctx); err != nil {
		return false, err
	}
	return aq.sqlExist(ctx)
}

// ExistX is like Exist, but panics if an error occurs.
func (aq *ArticleQuery) ExistX(ctx context.Context) bool {
	exist, err := aq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the ArticleQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (aq *ArticleQuery) Clone() *ArticleQuery {
	if aq == nil {
		return nil
	}
	return &ArticleQuery{
		config:         aq.config,
		limit:          aq.limit,
		offset:         aq.offset,
		order:          append([]OrderFunc{}, aq.order...),
		predicates:     append([]predicate.Article{}, aq.predicates...),
		withAuthor:     aq.withAuthor.Clone(),
		withLikedUsers: aq.withLikedUsers.Clone(),
		// clone intermediate query.
		sql:    aq.sql.Clone(),
		path:   aq.path,
		unique: aq.unique,
	}
}

// WithAuthor tells the query-builder to eager-load the nodes that are connected to
// the "author" edge. The optional arguments are used to configure the query builder of the edge.
func (aq *ArticleQuery) WithAuthor(opts ...func(*UserQuery)) *ArticleQuery {
	query := &UserQuery{config: aq.config}
	for _, opt := range opts {
		opt(query)
	}
	aq.withAuthor = query
	return aq
}

// WithLikedUsers tells the query-builder to eager-load the nodes that are connected to
// the "likedUsers" edge. The optional arguments are used to configure the query builder of the edge.
func (aq *ArticleQuery) WithLikedUsers(opts ...func(*UserQuery)) *ArticleQuery {
	query := &UserQuery{config: aq.config}
	for _, opt := range opts {
		opt(query)
	}
	aq.withLikedUsers = query
	return aq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Title string `json:"title,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.Article.Query().
//		GroupBy(article.FieldTitle).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (aq *ArticleQuery) GroupBy(field string, fields ...string) *ArticleGroupBy {
	grbuild := &ArticleGroupBy{config: aq.config}
	grbuild.fields = append([]string{field}, fields...)
	grbuild.path = func(ctx context.Context) (prev *sql.Selector, err error) {
		if err := aq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		return aq.sqlQuery(ctx), nil
	}
	grbuild.label = article.Label
	grbuild.flds, grbuild.scan = &grbuild.fields, grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Title string `json:"title,omitempty"`
//	}
//
//	client.Article.Query().
//		Select(article.FieldTitle).
//		Scan(ctx, &v)
//
func (aq *ArticleQuery) Select(fields ...string) *ArticleSelect {
	aq.fields = append(aq.fields, fields...)
	selbuild := &ArticleSelect{ArticleQuery: aq}
	selbuild.label = article.Label
	selbuild.flds, selbuild.scan = &aq.fields, selbuild.Scan
	return selbuild
}

func (aq *ArticleQuery) prepareQuery(ctx context.Context) error {
	for _, f := range aq.fields {
		if !article.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if aq.path != nil {
		prev, err := aq.path(ctx)
		if err != nil {
			return err
		}
		aq.sql = prev
	}
	return nil
}

func (aq *ArticleQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*Article, error) {
	var (
		nodes       = []*Article{}
		withFKs     = aq.withFKs
		_spec       = aq.querySpec()
		loadedTypes = [2]bool{
			aq.withAuthor != nil,
			aq.withLikedUsers != nil,
		}
	)
	if aq.withAuthor != nil {
		withFKs = true
	}
	if withFKs {
		_spec.Node.Columns = append(_spec.Node.Columns, article.ForeignKeys...)
	}
	_spec.ScanValues = func(columns []string) ([]interface{}, error) {
		return (*Article).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []interface{}) error {
		node := &Article{config: aq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	if len(aq.modifiers) > 0 {
		_spec.Modifiers = aq.modifiers
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, aq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}

	if query := aq.withAuthor; query != nil {
		ids := make([]uuid.UUID, 0, len(nodes))
		nodeids := make(map[uuid.UUID][]*Article)
		for i := range nodes {
			if nodes[i].article_author == nil {
				continue
			}
			fk := *nodes[i].article_author
			if _, ok := nodeids[fk]; !ok {
				ids = append(ids, fk)
			}
			nodeids[fk] = append(nodeids[fk], nodes[i])
		}
		query.Where(user.IDIn(ids...))
		neighbors, err := query.All(ctx)
		if err != nil {
			return nil, err
		}
		for _, n := range neighbors {
			nodes, ok := nodeids[n.ID]
			if !ok {
				return nil, fmt.Errorf(`unexpected foreign-key "article_author" returned %v`, n.ID)
			}
			for i := range nodes {
				nodes[i].Edges.Author = n
			}
		}
	}

	if query := aq.withLikedUsers; query != nil {
		edgeids := make([]driver.Value, len(nodes))
		byid := make(map[uuid.UUID]*Article)
		nids := make(map[uuid.UUID]map[*Article]struct{})
		for i, node := range nodes {
			edgeids[i] = node.ID
			byid[node.ID] = node
			node.Edges.LikedUsers = []*User{}
		}
		query.Where(func(s *sql.Selector) {
			joinT := sql.Table(article.LikedUsersTable)
			s.Join(joinT).On(s.C(user.FieldID), joinT.C(article.LikedUsersPrimaryKey[0]))
			s.Where(sql.InValues(joinT.C(article.LikedUsersPrimaryKey[1]), edgeids...))
			columns := s.SelectedColumns()
			s.Select(joinT.C(article.LikedUsersPrimaryKey[1]))
			s.AppendSelect(columns...)
			s.SetDistinct(false)
		})
		neighbors, err := query.sqlAll(ctx, func(_ context.Context, spec *sqlgraph.QuerySpec) {
			assign := spec.Assign
			values := spec.ScanValues
			spec.ScanValues = func(columns []string) ([]interface{}, error) {
				values, err := values(columns[1:])
				if err != nil {
					return nil, err
				}
				return append([]interface{}{new(uuid.UUID)}, values...), nil
			}
			spec.Assign = func(columns []string, values []interface{}) error {
				outValue := *values[0].(*uuid.UUID)
				inValue := *values[1].(*uuid.UUID)
				if nids[inValue] == nil {
					nids[inValue] = map[*Article]struct{}{byid[outValue]: struct{}{}}
					return assign(columns[1:], values[1:])
				}
				nids[inValue][byid[outValue]] = struct{}{}
				return nil
			}
		})
		if err != nil {
			return nil, err
		}
		for _, n := range neighbors {
			nodes, ok := nids[n.ID]
			if !ok {
				return nil, fmt.Errorf(`unexpected "likedUsers" node returned %v`, n.ID)
			}
			for kn := range nodes {
				kn.Edges.LikedUsers = append(kn.Edges.LikedUsers, n)
			}
		}
	}

	for i := range aq.loadTotal {
		if err := aq.loadTotal[i](ctx, nodes); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (aq *ArticleQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := aq.querySpec()
	if len(aq.modifiers) > 0 {
		_spec.Modifiers = aq.modifiers
	}
	_spec.Node.Columns = aq.fields
	if len(aq.fields) > 0 {
		_spec.Unique = aq.unique != nil && *aq.unique
	}
	return sqlgraph.CountNodes(ctx, aq.driver, _spec)
}

func (aq *ArticleQuery) sqlExist(ctx context.Context) (bool, error) {
	n, err := aq.sqlCount(ctx)
	if err != nil {
		return false, fmt.Errorf("ent: check existence: %w", err)
	}
	return n > 0, nil
}

func (aq *ArticleQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := &sqlgraph.QuerySpec{
		Node: &sqlgraph.NodeSpec{
			Table:   article.Table,
			Columns: article.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: article.FieldID,
			},
		},
		From:   aq.sql,
		Unique: true,
	}
	if unique := aq.unique; unique != nil {
		_spec.Unique = *unique
	}
	if fields := aq.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, article.FieldID)
		for i := range fields {
			if fields[i] != article.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := aq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := aq.limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := aq.offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := aq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (aq *ArticleQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(aq.driver.Dialect())
	t1 := builder.Table(article.Table)
	columns := aq.fields
	if len(columns) == 0 {
		columns = article.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if aq.sql != nil {
		selector = aq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if aq.unique != nil && *aq.unique {
		selector.Distinct()
	}
	for _, p := range aq.predicates {
		p(selector)
	}
	for _, p := range aq.order {
		p(selector)
	}
	if offset := aq.offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := aq.limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// ArticleGroupBy is the group-by builder for Article entities.
type ArticleGroupBy struct {
	config
	selector
	fields []string
	fns    []AggregateFunc
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Aggregate adds the given aggregation functions to the group-by query.
func (agb *ArticleGroupBy) Aggregate(fns ...AggregateFunc) *ArticleGroupBy {
	agb.fns = append(agb.fns, fns...)
	return agb
}

// Scan applies the group-by query and scans the result into the given value.
func (agb *ArticleGroupBy) Scan(ctx context.Context, v interface{}) error {
	query, err := agb.path(ctx)
	if err != nil {
		return err
	}
	agb.sql = query
	return agb.sqlScan(ctx, v)
}

func (agb *ArticleGroupBy) sqlScan(ctx context.Context, v interface{}) error {
	for _, f := range agb.fields {
		if !article.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("invalid field %q for group-by", f)}
		}
	}
	selector := agb.sqlQuery()
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := agb.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

func (agb *ArticleGroupBy) sqlQuery() *sql.Selector {
	selector := agb.sql.Select()
	aggregation := make([]string, 0, len(agb.fns))
	for _, fn := range agb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	// If no columns were selected in a custom aggregation function, the default
	// selection is the fields used for "group-by", and the aggregation functions.
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(agb.fields)+len(agb.fns))
		for _, f := range agb.fields {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	return selector.GroupBy(selector.Columns(agb.fields...)...)
}

// ArticleSelect is the builder for selecting fields of Article entities.
type ArticleSelect struct {
	*ArticleQuery
	selector
	// intermediate query (i.e. traversal path).
	sql *sql.Selector
}

// Scan applies the selector query and scans the result into the given value.
func (as *ArticleSelect) Scan(ctx context.Context, v interface{}) error {
	if err := as.prepareQuery(ctx); err != nil {
		return err
	}
	as.sql = as.ArticleQuery.sqlQuery(ctx)
	return as.sqlScan(ctx, v)
}

func (as *ArticleSelect) sqlScan(ctx context.Context, v interface{}) error {
	rows := &sql.Rows{}
	query, args := as.sql.Query()
	if err := as.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
