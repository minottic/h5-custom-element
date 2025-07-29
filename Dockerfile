FROM node:24 as DEV

WORKDIR /app

COPY app/ .

RUN npm install

CMD ["npm run build"]
