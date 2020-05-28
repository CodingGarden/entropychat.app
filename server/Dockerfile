FROM node:lts-alpine

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
