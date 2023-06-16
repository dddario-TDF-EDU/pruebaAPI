#Sample Dockerfile for NodeJS Apps

FROM node:18.15.0

ENV NODE_ENV=production

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]