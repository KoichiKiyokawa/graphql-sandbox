.PHONY: di dev

di:
	cd di && go run -mod=mod github.com/google/wire/cmd/wire

dev:
	air -build.cmd="go build -o tmp/main cmd/api/main.go"