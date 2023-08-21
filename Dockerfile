FROM node:lts-alpine
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

COPY *.json ./
RUN npm install -f
COPY src ./src
COPY .env ./.env


#RUN nest build
#COPY dist ./dist

EXPOSE 3000

CMD ["npm","run","start"]
