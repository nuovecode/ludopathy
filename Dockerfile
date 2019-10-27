FROM node:10-alpine

WORKDIR /var/www

COPY package.json ./

RUN npm install
COPY . .

CMD [ "npm", "start" ]
