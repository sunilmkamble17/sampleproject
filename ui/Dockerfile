FROM node:14.17.0
RUN mkdir usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@latest
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0 