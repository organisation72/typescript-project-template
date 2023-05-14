FROM node:18-alpine AS base
WORKDIR /project
COPY . .
RUN yarn
RUN yarn build
CMD yarn start