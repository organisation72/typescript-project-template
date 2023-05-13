FROM node:18-alpine

COPY . .

RUN yarn add typescript
RUN yarn install
RUN yarn build

CMD yarn start