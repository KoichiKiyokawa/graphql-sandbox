#!/bin/bash

#
# Example:
#  ./scripts/assert_no_diff.sh packages/web # assert no diff in web package
#

git diff --exit-code --quiet
