FROM node:19 AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

COPY public /app/dist

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf