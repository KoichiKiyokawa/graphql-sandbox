#!/bin/bash

# Usage: ./scripts/generate.sh
set -euxo pipefail
cd "$(dirname "$0")"
cd ..
docker run --rm -v $(pwd):/src -w /src kjconroy/sqlc generate
go generate ./...