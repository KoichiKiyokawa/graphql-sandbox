migrate:
	go run script/migrate.go

reset:
	rm -rf gorm.db

migrate-reset:
	make reset
	go run script/migrate.go

seed:
	go run script/seed.go

seed-reset:
	make reset
	make migrate
	go run script/seed.go
