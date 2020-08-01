FROM node:lts-alpine

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV WAIT_VERSION 2.7.2

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

RUN chmod +x /wait

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
