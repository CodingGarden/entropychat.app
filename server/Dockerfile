FROM node:14 as build

ENV PORT 3000

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY ./ /app

EXPOSE 3000
CMD npm run start