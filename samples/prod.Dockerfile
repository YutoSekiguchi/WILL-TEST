FROM node:15.8
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "start" ]