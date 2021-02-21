FROM node:alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package*.json ./

USER node

RUN npm ci --only=production

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "index.js" ]
