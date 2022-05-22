FROM --platform=linux/x86_64 node:16.7.0
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y npm
RUN npm install
CMD [ "npm", "run", "start" ]