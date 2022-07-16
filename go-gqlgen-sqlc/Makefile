include .env

migration_dir=db/migrations
migration_command=docker run -v $(CURDIR)/$(migration_dir):/$(migration_dir) --network host migrate/migrate:v4.15.2

generate:
	go generate ./...

seed:
	go run scripts/seed.go

create-migrate:
	@/bin/echo -n "Please input the migration name: "
	@read name; \
	$(migration_command) create -dir $(migration_dir) -seq -ext sql "$$name"

up-migrate:
	$(migration_command) -path $(migration_dir) -database $(DATABASE_URL) up

migrate-interactive:
	@while true; do \
		echo "---migration interactive mode---"; \
		echo "Please input the migration command(Press enter to show help): "; \
		read command; \
		$(migration_command) -path $(migration_dir) -database $(DATABASE_URL) $$command; \
		echo ""; \
	done;