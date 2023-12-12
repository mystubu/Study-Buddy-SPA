FROM node:20.10.0-alpine3.18 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
# todo: fix nginxconfig instead of run start
#FROM nginxinc/nginx-unprivileged:1.23-alpine-perl
#
#COPY --link nginx.conf /etc/nginx/conf.d/default.conf
#COPY --link --from=build usr/src/app/build/ /usr/share/nginx/html