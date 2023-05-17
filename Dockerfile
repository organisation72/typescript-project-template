FROM node:18-alpine AS base
WORKDIR /project
COPY . .
RUN yarn

FROM base as test

FROM base as prod
RUN yarn build
CMD yarn start