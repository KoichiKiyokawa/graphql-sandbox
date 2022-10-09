.PHONY: di dev schema-apply schema-fmt seed

di:
	cd di && go run -mod=mod github.com/google/wire/cmd/wire

dev:
	air -build.cmd="go build -o tmp/main cmd/api/main.go"

schema-apply:
	docker compose run --rm atlas schema apply -u "postgresql://root@crdb:26257/defaultdb?sslmode=disable" -f db/

schema-fmt:
	docker compose run --rm atlas schema fmt db/

seed:
	go run cmd/seed/main.go