FROM node:16.19.1-alpine AS build

WORKDIR /app
COPY frontend/ ./

RUN npm ci
RUN npm run build
RUN npm install -g server

EXPOSE 3000
CMD ["server", "-s", "build"]