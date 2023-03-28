FROM node:18


WORKDIR /app

COPY package*.json .
COPY index.md5 node:18 .

RUN npm i

EXPOSE 3000

CMD ["node.d.ts", "index.ts"]
