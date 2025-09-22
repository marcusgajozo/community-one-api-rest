FROM node:22.16-alpine as base
RUN npm install -g pnpm

FROM base as development
WORKDIR /api
CMD [ "pnpm", "start:dev" ]