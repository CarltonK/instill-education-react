#############################
# STAGE 1: Build artifacts
#############################
FROM node:18.15.0-alpine as build

RUN mkdir -p /app
RUN mkdir -p /app/build

COPY . /app/

# set working directory
WORKDIR /app

# install dependencies
RUN npm i

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# build
RUN npm run build

# remove development dependencies
RUN npm prune --omit=dev

################################
# STAGE 2: Take build artifacts
################################
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80