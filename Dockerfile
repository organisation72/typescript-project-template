FROM node:18-alpine AS base
WORKDIR /project
COPY . .
RUN yarn

FROM base AS test
RUN yarn test

FROM base AS prod
RUN yarn build
CMD yarn start
