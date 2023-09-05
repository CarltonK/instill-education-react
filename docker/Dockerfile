# base image
FROM node:18.15.0-alpine

# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /app/

RUN npm i
# start app
CMD ["npm", "start"]