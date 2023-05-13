FROM node:18-alpine

COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn add typescript
RUN yarn build

CMD yarn start