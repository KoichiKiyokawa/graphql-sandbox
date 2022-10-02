#!/bin/bash

#
# Example:
#  ./scripts/assert_no_diff.sh packages/web # assert no diff in web package
#

DIFF_LINES=$(git status $@ --short | wc -l)
test $DIFF_LINES -eq 0