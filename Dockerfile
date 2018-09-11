FROM node:carbon

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g nodemon
RUN npm install -g sequelize-cli
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8000
CMD [ "npm", "run","start" ]

