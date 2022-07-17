// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"go-gqlgen-ent/ent/article"
	"go-gqlgen-ent/ent/predicate"
	"go-gqlgen-ent/ent/user"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// ArticleUpdate is the builder for updating Article entities.
type ArticleUpdate struct {
	config
	hooks    []Hook
	mutation *ArticleMutation
}

// Where appends a list predicates to the ArticleUpdate builder.
func (au *ArticleUpdate) Where(ps ...predicate.Article) *ArticleUpdate {
	au.mutation.Where(ps...)
	return au
}

// SetTitle sets the "title" field.
func (au *ArticleUpdate) SetTitle(s string) *ArticleUpdate {
	au.mutation.SetTitle(s)
	return au
}

// SetBody sets the "body" field.
func (au *ArticleUpdate) SetBody(s string) *ArticleUpdate {
	au.mutation.SetBody(s)
	return au
}

// SetCreatedAt sets the "createdAt" field.
func (au *ArticleUpdate) SetCreatedAt(t time.Time) *ArticleUpdate {
	au.mutation.SetCreatedAt(t)
	return au
}

// SetNillableCreatedAt sets the "createdAt" field if the given value is not nil.
func (au *ArticleUpdate) SetNillableCreatedAt(t *time.Time) *ArticleUpdate {
	if t != nil {
		au.SetCreatedAt(*t)
	}
	return au
}

// SetUpdatedAt sets the "updatedAt" field.
func (au *ArticleUpdate) SetUpdatedAt(t time.Time) *ArticleUpdate {
	au.mutation.SetUpdatedAt(t)
	return au
}

// SetNillableUpdatedAt sets the "updatedAt" field if the given value is not nil.
func (au *ArticleUpdate) SetNillableUpdatedAt(t *time.Time) *ArticleUpdate {
	if t != nil {
		au.SetUpdatedAt(*t)
	}
	return au
}

// SetAuthorID sets the "author" edge to the User entity by ID.
func (au *ArticleUpdate) SetAuthorID(id uuid.UUID) *ArticleUpdate {
	au.mutation.SetAuthorID(id)
	return au
}

// SetNillableAuthorID sets the "author" edge to the User entity by ID if the given value is not nil.
func (au *ArticleUpdate) SetNillableAuthorID(id *uuid.UUID) *ArticleUpdate {
	if id != nil {
		au = au.SetAuthorID(*id)
	}
	return au
}

// SetAuthor sets the "author" edge to the User entity.
func (au *ArticleUpdate) SetAuthor(u *User) *ArticleUpdate {
	return au.SetAuthorID(u.ID)
}

// AddLikedUserIDs adds the "likedUsers" edge to the User entity by IDs.
func (au *ArticleUpdate) AddLikedUserIDs(ids ...uuid.UUID) *ArticleUpdate {
	au.mutation.AddLikedUserIDs(ids...)
	return au
}

// AddLikedUsers adds the "likedUsers" edges to the User entity.
func (au *ArticleUpdate) AddLikedUsers(u ...*User) *ArticleUpdate {
	ids := make([]uuid.UUID, len(u))
	for i := range u {
		ids[i] = u[i].ID
	}
	return au.AddLikedUserIDs(ids...)
}

// Mutation returns the ArticleMutation object of the builder.
func (au *ArticleUpdate) Mutation() *ArticleMutation {
	return au.mutation
}

// ClearAuthor clears the "author" edge to the User entity.
func (au *ArticleUpdate) ClearAuthor() *ArticleUpdate {
	au.mutation.ClearAuthor()
	return au
}

// ClearLikedUsers clears all "likedUsers" edges to the User entity.
func (au *ArticleUpdate) ClearLikedUsers() *ArticleUpdate {
	au.mutation.ClearLikedUsers()
	return au
}

// RemoveLikedUserIDs removes the "likedUsers" edge to User entities by IDs.
func (au *ArticleUpdate) RemoveLikedUserIDs(ids ...uuid.UUID) *ArticleUpdate {
	au.mutation.RemoveLikedUserIDs(ids...)
	return au
}

// RemoveLikedUsers removes "likedUsers" edges to User entities.
func (au *ArticleUpdate) RemoveLikedUsers(u ...*User) *ArticleUpdate {
	ids := make([]uuid.UUID, len(u))
	for i := range u {
		ids[i] = u[i].ID
	}
	return au.RemoveLikedUserIDs(ids...)
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (au *ArticleUpdate) Save(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(au.hooks) == 0 {
		if err = au.check(); err != nil {
			return 0, err
		}
		affected, err = au.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*ArticleMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			if err = au.check(); err != nil {
				return 0, err
			}
			au.mutation = mutation
			affected, err = au.sqlSave(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(au.hooks) - 1; i >= 0; i-- {
			if au.hooks[i] == nil {
				return 0, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = au.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, au.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// SaveX is like Save, but panics if an error occurs.
func (au *ArticleUpdate) SaveX(ctx context.Context) int {
	affected, err := au.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (au *ArticleUpdate) Exec(ctx context.Context) error {
	_, err := au.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (au *ArticleUpdate) ExecX(ctx context.Context) {
	if err := au.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (au *ArticleUpdate) check() error {
	if v, ok := au.mutation.Title(); ok {
		if err := article.TitleValidator(v); err != nil {
			return &ValidationError{Name: "title", err: fmt.Errorf(`ent: validator failed for field "Article.title": %w`, err)}
		}
	}
	if v, ok := au.mutation.Body(); ok {
		if err := article.BodyValidator(v); err != nil {
			return &ValidationError{Name: "body", err: fmt.Errorf(`ent: validator failed for field "Article.body": %w`, err)}
		}
	}
	return nil
}

func (au *ArticleUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   article.Table,
			Columns: article.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: article.FieldID,
			},
		},
	}
	if ps := au.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := au.mutation.Title(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: article.FieldTitle,
		})
	}
	if value, ok := au.mutation.Body(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: article.FieldBody,
		})
	}
	if value, ok := au.mutation.CreatedAt(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: article.FieldCreatedAt,
		})
	}
	if value, ok := au.mutation.UpdatedAt(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: article.FieldUpdatedAt,
		})
	}
	if au.mutation.AuthorCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: false,
			Table:   article.AuthorTable,
			Columns: []string{article.AuthorColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.AuthorIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: false,
			Table:   article.AuthorTable,
			Columns: []string{article.AuthorColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if au.mutation.LikedUsersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   article.LikedUsersTable,
			Columns: article.LikedUsersPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.RemovedLikedUsersIDs(); len(nodes) > 0 && !au.mutation.LikedUsersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   article.LikedUsersTable,
			Columns: article.LikedUsersPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := au.mutation.LikedUsersIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   article.LikedUsersTable,
			Columns: article.LikedUsersPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, au.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{article.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return 0, err
	}
	return n, nil
}

// ArticleUpdateOne is the builder for updating a single Article entity.
type ArticleUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *ArticleMutation
}

// SetTitle sets the "title" field.
func (auo *ArticleUpdateOne) SetTitle(s string) *ArticleUpdateOne {
	auo.mutation.SetTitle(s)
	return auo
}

// SetBody sets the "body" field.
func (auo *ArticleUpdateOne) SetBody(s string) *ArticleUpdateOne {
	auo.mutation.SetBody(s)
	return auo
}

// SetCreatedAt sets the "createdAt" field.
func (auo *ArticleUpdateOne) SetCreatedAt(t time.Time) *ArticleUpdateOne {
	auo.mutation.SetCreatedAt(t)
	return auo
}

// SetNillableCreatedAt sets the "createdAt" field if the given value is not nil.
func (auo *ArticleUpdateOne) SetNillableCreatedAt(t *time.Time) *ArticleUpdateOne {
	if t != nil {
		auo.SetCreatedAt(*t)
	}
	return auo
}

// SetUpdatedAt sets the "updatedAt" field.
func (auo *ArticleUpdateOne) SetUpdatedAt(t time.Time) *ArticleUpdateOne {
	auo.mutation.SetUpdatedAt(t)
	return auo
}

// SetNillableUpdatedAt sets the "updatedAt" field if the given value is not nil.
func (auo *ArticleUpdateOne) SetNillableUpdatedAt(t *time.Time) *ArticleUpdateOne {
	if t != nil {
		auo.SetUpdatedAt(*t)
	}
	return auo
}

// SetAuthorID sets the "author" edge to the User entity by ID.
func (auo *ArticleUpdateOne) SetAuthorID(id uuid.UUID) *ArticleUpdateOne {
	auo.mutation.SetAuthorID(id)
	return auo
}

// SetNillableAuthorID sets the "author" edge to the User entity by ID if the given value is not nil.
func (auo *ArticleUpdateOne) SetNillableAuthorID(id *uuid.UUID) *ArticleUpdateOne {
	if id != nil {
		auo = auo.SetAuthorID(*id)
	}
	return auo
}

// SetAuthor sets the "author" edge to the User entity.
func (auo *ArticleUpdateOne) SetAuthor(u *User) *ArticleUpdateOne {
	return auo.SetAuthorID(u.ID)
}

// AddLikedUserIDs adds the "likedUsers" edge to the User entity by IDs.
func (auo *ArticleUpdateOne) AddLikedUserIDs(ids ...uuid.UUID) *ArticleUpdateOne {
	auo.mutation.AddLikedUserIDs(ids...)
	return auo
}

// AddLikedUsers adds the "likedUsers" edges to the User entity.
func (auo *ArticleUpdateOne) AddLikedUsers(u ...*User) *ArticleUpdateOne {
	ids := make([]uuid.UUID, len(u))
	for i := range u {
		ids[i] = u[i].ID
	}
	return auo.AddLikedUserIDs(ids...)
}

// Mutation returns the ArticleMutation object of the builder.
func (auo *ArticleUpdateOne) Mutation() *ArticleMutation {
	return auo.mutation
}

// ClearAuthor clears the "author" edge to the User entity.
func (auo *ArticleUpdateOne) ClearAuthor() *ArticleUpdateOne {
	auo.mutation.ClearAuthor()
	return auo
}

// ClearLikedUsers clears all "likedUsers" edges to the User entity.
func (auo *ArticleUpdateOne) ClearLikedUsers() *ArticleUpdateOne {
	auo.mutation.ClearLikedUsers()
	return auo
}

// RemoveLikedUserIDs removes the "likedUsers" edge to User entities by IDs.
func (auo *ArticleUpdateOne) RemoveLikedUserIDs(ids ...uuid.UUID) *ArticleUpdateOne {
	auo.mutation.RemoveLikedUserIDs(ids...)
	return auo
}

// RemoveLikedUsers removes "likedUsers" edges to User entities.
func (auo *ArticleUpdateOne) RemoveLikedUsers(u ...*User) *ArticleUpdateOne {
	ids := make([]uuid.UUID, len(u))
	for i := range u {
		ids[i] = u[i].ID
	}
	return auo.RemoveLikedUserIDs(ids...)
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (auo *ArticleUpdateOne) Select(field string, fields ...string) *ArticleUpdateOne {
	auo.fields = append([]string{field}, fields...)
	return auo
}

// Save executes the query and returns the updated Article entity.
func (auo *ArticleUpdateOne) Save(ctx context.Context) (*Article, error) {
	var (
		err  error
		node *Article
	)
	if len(auo.hooks) == 0 {
		if err = auo.check(); err != nil {
			return nil, err
		}
		node, err = auo.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*ArticleMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			if err = auo.check(); err != nil {
				return nil, err
			}
			auo.mutation = mutation
			node, err = auo.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(auo.hooks) - 1; i >= 0; i-- {
			if auo.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = auo.hooks[i](mut)
		}
		v, err := mut.Mutate(ctx, auo.mutation)
		if err != nil {
			return nil, err
		}
		nv, ok := v.(*Article)
		if !ok {
			return nil, fmt.Errorf("unexpected node type %T returned from ArticleMutation", v)
		}
		node = nv
	}
	return node, err
}

// SaveX is like Save, but panics if an error occurs.
func (auo *ArticleUpdateOne) SaveX(ctx context.Context) *Article {
	node, err := auo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (auo *ArticleUpdateOne) Exec(ctx context.Context) error {
	_, err := auo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (auo *ArticleUpdateOne) ExecX(ctx context.Context) {
	if err := auo.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (auo *ArticleUpdateOne) check() error {
	if v, ok := auo.mutation.Title(); ok {
		if err := article.TitleValidator(v); err != nil {
			return &ValidationError{Name: "title", err: fmt.Errorf(`ent: validator failed for field "Article.title": %w`, err)}
		}
	}
	if v, ok := auo.mutation.Body(); ok {
		if err := article.BodyValidator(v); err != nil {
			return &ValidationError{Name: "body", err: fmt.Errorf(`ent: validator failed for field "Article.body": %w`, err)}
		}
	}
	return nil
}

func (auo *ArticleUpdateOne) sqlSave(ctx context.Context) (_node *Article, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   article.Table,
			Columns: article.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: article.FieldID,
			},
		},
	}
	id, ok := auo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Article.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := auo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, article.FieldID)
		for _, f := range fields {
			if !article.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != article.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := auo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := auo.mutation.Title(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: article.FieldTitle,
		})
	}
	if value, ok := auo.mutation.Body(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: article.FieldBody,
		})
	}
	if value, ok := auo.mutation.CreatedAt(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: article.FieldCreatedAt,
		})
	}
	if value, ok := auo.mutation.UpdatedAt(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: article.FieldUpdatedAt,
		})
	}
	if auo.mutation.AuthorCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: false,
			Table:   article.AuthorTable,
			Columns: []string{article.AuthorColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.AuthorIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: false,
			Table:   article.AuthorTable,
			Columns: []string{article.AuthorColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if auo.mutation.LikedUsersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   article.LikedUsersTable,
			Columns: article.LikedUsersPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.RemovedLikedUsersIDs(); len(nodes) > 0 && !auo.mutation.LikedUsersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   article.LikedUsersTable,
			Columns: article.LikedUsersPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := auo.mutation.LikedUsersIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: true,
			Table:   article.LikedUsersTable,
			Columns: article.LikedUsersPrimaryKey,
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeUUID,
					Column: user.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &Article{config: auo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, auo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{article.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return nil, err
	}
	return _node, nil
}
