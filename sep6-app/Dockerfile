FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install --save @angular/core
RUN npm install --save @angular/common
RUN npm install --save bootstrap@4.0.0-beta
RUN npm install --save jquery
RUN npm install --save @angular/cdk
RUN npm install --save @angular/material
RUN npm install --save chart.js
RUN npm install --save ng2-charts 
RUN npm install --save
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]