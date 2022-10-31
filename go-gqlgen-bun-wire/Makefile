.PHONY: help di dev schema-apply schema-fmt seed

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

di: ## Run dependency injection
	cd cmd/api/di && go run -mod=mod github.com/google/wire/cmd/wire

dev: ## Run dev server
	air -build.cmd="go build -o tmp/main cmd/api/main.go"

schema-apply: ## Apply schema to database
	docker compose run --rm atlas schema apply -u "postgresql://root@crdb:26257/defaultdb?sslmode=disable" -f db/

schema-fmt: ## Format schema files
	docker compose run --rm atlas schema fmt db/

seed: ## Seed database. Set RESET=1 to reset before seeding.
	go run cmd/seed/main.go

deploy: ## Deploy to Cloud Run
	cp docker/Dockerfile.api Dockerfile
	gcloud run deploy go-gqlgen-bun-wire --region=asia-northeast1 --allow-unauthenticated --source=. || exit 0
	rm Dockerfile