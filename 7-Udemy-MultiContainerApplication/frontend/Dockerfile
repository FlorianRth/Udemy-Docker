FROM node

ENV INPUT=/app

WORKDIR $INPUT

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "start-app"]