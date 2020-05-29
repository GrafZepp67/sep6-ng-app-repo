FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --save @angular/core@^7.2.0
RUN npm install --save @angular/common@^7.2.0
RUN npm install -g @angular/cli
RUN npm install --save bootstrap@4.0.0-beta jquery
RUN npm install --save @angular/cdk @angular/material
RUN npm install --save 
RUN npm install --save chart.js
RUN npm install --save ng2-charts 
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]