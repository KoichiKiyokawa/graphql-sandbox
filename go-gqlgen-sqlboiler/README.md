# go-gqlgen-sqlboiler

## コマンド

### スキーマからコードを生成

```sh
go run github.com/99designs/gqlgen generate
```

or

```sh
# resolver.goの先頭にコメントを書いているため
go generate ./...
```

### dataloader を生成

```sh
cd dataloader
# example
go run github.com/vektah/dataloaden UserLoader string "*go-gqlgen-sqlboiler/models.User"
```
