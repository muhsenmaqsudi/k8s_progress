FROM node:lts-alpine
WORKDIR /app
COPY yarn.lock ./
RUN yarn install
COPY . .
CMD [ "yarn", "start"]