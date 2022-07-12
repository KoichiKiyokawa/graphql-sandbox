#!/bin/bash
# Usage: ./scripts/migrate-dev.sh
set -euxo pipefail
cd "$(dirname "$0")"

TAG=migrate-dev

pushd ../prisma
  docker build -t $TAG .
popd

pushd ../
  docker run --rm -it -v $(pwd):/src -w /src $TAG prisma migrate dev --skip-generate
popd