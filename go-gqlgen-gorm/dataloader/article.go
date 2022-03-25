package dataloader

import (
	"go-gqlgen-gorm/model"
	"time"

	"github.com/google/uuid"
	"github.com/samber/lo"
	"gorm.io/gorm"
)

func articlesByUserIDs(db *gorm.DB) ArticlesLoader {
	return ArticlesLoader{
		maxBatch: 1000,
		wait:     10 * time.Millisecond,
		fetch: func(keys []uuid.UUID) ([][]*model.Article, []error) {
			var combinedArticles []*model.Article
			result := db.Where("user_id in ?", keys).Find(&combinedArticles)
			articlesInOrder := lo.Map(keys, func(key uuid.UUID, _ int) []*model.Article {
				return lo.Filter(combinedArticles, func(article *model.Article, _ int) bool { return article.UserID == key })
			})

			return articlesInOrder, []error{result.Error}
		},
	}
}
