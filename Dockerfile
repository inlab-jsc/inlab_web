FROM node:14.5.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 3000
CMD ['npm','run','dev']