FROM node:lts-alpine

ENV WAIT_VERSION 2.7.3

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD /wait && pm2-runtime start ecosystem.config.js
