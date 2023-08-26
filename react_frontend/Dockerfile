FROM node:15.13-alpine
WORKDIR /react
COPY ./package.json ./package.json
RUN npm i 
COPY . .
RUN npm run build