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
			result := db.Where("user_id IN ?", keys).Find(&combinedArticles)

			return sortByKeys(keys, combinedArticles), []error{result.Error}
		},
	}
}

type likedUserResult struct {
	LikedUserID uuid.UUID
	model.Article
}

func likedArticlesByUserIDs(db *gorm.DB) ArticlesLoader {
	return ArticlesLoader{
		maxBatch: 1000,
		wait:     10 * time.Millisecond,
		fetch: func(keys []uuid.UUID) ([][]*model.Article, []error) {
			var results []likedUserResult
			res := db.
				Table("articles").
				Select("user_liked_articles.user_id as liked_user_id, articles.*").
				Joins("JOIN user_liked_articles ON user_liked_articles.article_id = articles.id").
				Where("user_liked_articles.user_id IN ?", keys).
				Find(&results)

			sorted := lo.Map(keys, func(key uuid.UUID, _ int) []*model.Article {
				var currentKeyResults []*model.Article
				for _, result := range results {
					if result.LikedUserID == key {
						currentKeyResults = append(currentKeyResults, &result.Article)
					}
				}
				return currentKeyResults
			})
			return sorted, []error{res.Error}
		},
	}
}

// TODO: O(n^2) だが、これでいいのか？
func sortByKeys(keys []uuid.UUID, articles []*model.Article) [][]*model.Article {
	return lo.Map(keys, func(key uuid.UUID, _ int) []*model.Article {
		return lo.Filter(articles, func(article *model.Article, _ int) bool { return article.UserID == key })
	})
}
