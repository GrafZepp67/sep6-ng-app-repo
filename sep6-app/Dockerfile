FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install --save
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]