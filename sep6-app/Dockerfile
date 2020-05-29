FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --save @angular/cli @angular/cdk @angular/material @angular/common@^7.2.0 @angular/core@^7.2.0
RUN npm install
RUN npm install --save chart.js ng2-charts 
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]