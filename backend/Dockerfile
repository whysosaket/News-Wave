FROM node:22 as backend-build
WORKDIR /fullstack/backend

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 9000
CMD ["npm", "run", "start"]
