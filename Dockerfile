FROM node:14-alpine

RUN apk add --no-cache bash

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN npm i -g @nestjs/cli@8.0.0 wait-on

USER node

WORKDIR /home/node/app

#COPY package.json ./

#RUN npm install
#COPY . .
#RUN npm run build

#ENTRYPOINT wait-on && npm run start:dev
