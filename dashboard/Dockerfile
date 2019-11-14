FROM node:10-alpine

ENV NODE_ENV development

WORKDIR /var/dashboard

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm", "start" ]