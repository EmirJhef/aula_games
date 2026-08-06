FROM node:24
COPY package* tailwind.config.js postcss.config.js .
RUN npm ci

COPY . .
RUN npm run build 
EXPOSE 3000


CMD npm run start
