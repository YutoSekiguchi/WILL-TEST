# M1チップでないmacユーザ，Windowsユーザ用のコマン
start-dev:
	docker-compose -f docker-compose.dev.yml up --build -d

down-dev:
	docker-compose -f docker-compose.dev.yml down --rmi all

# 本番環境用のコマンド
start-prod:
	docker-compose -f docker-compose.prod.yml up --build -d --remove-orphans

down-prod:
	docker-compose -f docker-compose.prod.yml down --rmi all