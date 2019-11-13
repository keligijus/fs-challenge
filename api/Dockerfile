FROM keymetrics/pm2:10-alpine

ENV NODE_ENV development

WORKDIR /var/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "pm2-dev", "start", "app.yaml" ]
