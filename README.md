# 環境構築

0. このリポジトリをローカルに clone する

```
> git clone https://github.com/miyasan31/nextjs-spring-boot.git
```

1. コンテナ立ち上げ

```
# ホストマシンで実行

> docker-compose up -d
```

2. コンテナへ接続

```
# ホストマシンで実行

> docker-compose exec app bash
```

3. アプリをビルドする

```
# コンテナ内で実行

bash-4.4# > sh gradlew build
```

4. ファイルの変更を監視し、変更が起きたらリビルドする

```
# コンテナ内で実行

bash-4.4# > ./gradlew build --continuous
```

5. アプリを起動

```
# コンテナ内で実行

bash-4.4# > ./gradlew bootRun
```

6. 起動確認

```
# ホストマシンで実行

> curl http://localhost:8080 -X GET

resuponse -> [{"id":1,"name":"test"}]
```
