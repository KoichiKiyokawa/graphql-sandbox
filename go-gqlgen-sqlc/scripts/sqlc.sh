echo $(pwd)
docker run --rm -v $(pwd):/src -w /src kjconroy/sqlc generate
