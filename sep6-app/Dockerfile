FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
RUN npm install --save @angular/cdk @angular/material
RUN npm install --save chart.js
RUN npm install --save ng2-charts 
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]