migration_dir=db/migrations
migration_command=docker run -v $(CURDIR)/$(migration_dir):/$(migration_dir) --network host migrate/migrate:v4.15.2

create-migrate:
	@/bin/echo -n "Please input the migration name: "
	@read name; \
	$(migration_command) create -dir $(migration_dir) -seq -ext sql "$$name"

up-migrate:
	. ./.env && \
	$(migration_command) -path $(migration_dir) -database "$$DATABASE_URL" up