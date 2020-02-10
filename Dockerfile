FROM node:lts
WORKDIR /app
COPY package*
RUN npm install

FROM node:lts-alpine
WORKDIR /app
COPY . /app/
EXPOSE 8089
CMD [ "npm", "run", "start" ]