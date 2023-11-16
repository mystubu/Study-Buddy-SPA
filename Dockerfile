FROM node:20-alpine

WORKDIR /app 
COPY package*.json ./


COPY . .

COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh
