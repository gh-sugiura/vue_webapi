FROM node:20-alpine

# 必要ツール（git 等）が必要なら追加
RUN apk add --no-cache bash

WORKDIR /var/www

# 最初に package.json があればキャッシュ効率化
# COPY frontend/package*.json ./frontend/
# RUN cd frontend && npm install

# デフォルトコマンドは docker-compose で上書き
CMD ["npm", "run", "dev"]
