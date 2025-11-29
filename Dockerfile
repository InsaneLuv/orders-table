# Этап 1: сборка
FROM node:19-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV API_BASE_URL=https://backend.alt-cargo.tw1.ru

RUN npm run build


# Этап 2: nginx для продакшена
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
