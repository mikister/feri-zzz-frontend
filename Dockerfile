FROM node:alpine

COPY * /

RUN npm install

RUN npm run-script build

CMD ["npm", "run-script", "serve"]
