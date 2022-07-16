migration_dir=db/migrations
create-migrate:
	@/bin/echo -n "Please input the migration name: "
	@read name; \
	docker run -v $(CURDIR)/$(migration_dir):/$(migration_dir) --network host migrate/migrate:v4.15.2 create -dir $(migration_dir) -seq -ext sql "$$name"

rub-migrate:
	docker run -v $(CURDIR)/$(migration_dir):/$(migration_dir) --network host migrate/migrate:v4.15.2 -path $(migration_dir) -database postgres://localhost:5432/database