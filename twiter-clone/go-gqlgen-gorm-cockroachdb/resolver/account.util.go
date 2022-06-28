package resolver

import "go-gqlgen-gorm-cockroachdb/graph/generated"

func (r *mutationResolver) getRelation(currentUserID int, targetAccountID int) (*generated.RelationResult, error) {
	result := generated.RelationResult{
		ID: targetAccountID,
	}
	if err := r.db.Table("relationship").Select("count(*) > 0").Where("from_id = ? AND to_id = ?", currentUserID, targetAccountID).Scan(&result.Following).Error; err != nil {
		return nil, err
	}
	if err := r.db.Table("relationship").Select("count(*) > 0").Where("from_id = ? AND to_id = ?", targetAccountID, currentUserID).Scan(&result.FollowedBy).Error; err != nil {
		return nil, err
	}

	return &result, nil
}
