# Stage 1: Build the React frontend
FROM node:alpine as build

WORKDIR /portfolio

COPY package*.json ./
RUN npm i --force
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "build"]


