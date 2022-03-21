package dataloader

import (
	"fmt"

	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

type model struct {
	ID string
}

// Sort by the order of the id corresponding to the key
// func sortRowsByKeys[T model](rows []T, keys []string) []T {
// 	var ret []T
// 	for _, key := range keys {
// 		for _, row := range rows {
// 			if row.ID == key {
// 				ret = append(ret, row)
// 			}
// 		}
// 	}
// 	return ret
// }

// cf) https://stackoverflow.com/questions/3303851/sqlite-and-custom-order-by
func sortByKeysAsOrder(keys []string, col string) qm.QueryMod {
	orderByClause := fmt.Sprintf("CASE %s", col)
	for i, key := range keys {
		orderByClause += fmt.Sprintf(" WHEN '%s' THEN %d ", key, i)
	}
	orderByClause += "END"
	return qm.OrderBy(orderByClause)
}
