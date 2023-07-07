#Sample Dockerfile for NodeJS Apps

FROM node:18.15.0

ENV NODE_ENV=production

WORKDIR dariocabrera/src/main

RUN `npm install -g npm@9.8.0`

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]