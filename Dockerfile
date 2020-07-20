FROM node

RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install
EXPOSE 3000

CMD BUILD_ENV=docker npm run start
