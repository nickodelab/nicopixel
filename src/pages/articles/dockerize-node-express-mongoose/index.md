---
title: Docker Compose With Node & MongoDB
date: "2020-04-10"
layout: post
draft: false
path: "/posts/dockerize-compose-node-mongo/"
category: 
  - "Docker"
  - "Redux"
description: "In this post I'll build a node/mongoose app and dockerize with docker-compose.yml to bundle services together. We will also run our containers on a Digital Ocean droplet."
---

### Step 1: Create `Dockerfile` in the root app
```bash
# not a good idea get node from the latest 
# because if the image get updated you can mess you app :(
# FROM node:latest 
# Much better get a stable version, like version 10
FROM node:10

# where our application live
WORKDIR /usr/src/app

# we want to move out package.json file inside our container
COPY package*.json ./

RUN npm install

# COPY all from here (workdir) into our container
COPY . .

# prepare the port 3000 to receive connection into our container
EXPOSE 3000

CMD ["npm", "start"]
```

### Step 2: Create `docker-compose.yml`
The docker-compose file allow us defining and running multi-container Docker applications

```bash
version: "3"
services:
  # the name of your services (doesn't matter the name)
  app:
    container_name: palbailador
    # if a fail happen restart automatically
    restart: always
    # we'll build our image from our Dockerfile
    # with the '.' it will look for the Dockerfile
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    build: .
    command: npm start
    ports:
      # port 80 in our local machine map to port 3000 in the container
      - "80:3000"
    links:
      - mongo
  mongo:
    container_name: mongo
    # we won't be using an image
    # we'll pull the image from docker hub
    image: mongo
    ports:
      - "27017:27017"
```

### Step 3 (optional): Create `.dockerignore`
```bash
node_modules
npm-debug.log
```
Now, with this 3 files we are reading to run our application

### Step 4: Be careful with the URL to connect in your code
You should change the `localhost` server to `mongo` (container_name) as you can see in this code:

```js
mongoose
  .connect('mongodb://mongo:27017/DATABASE_NAME', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.log('ERROR!', error))
```

### Have-to-know Docker commands
- `docker-compose up`: build all the images, node:10 and mongo in our case, copy all files from docker Hub, exposing ports and other stuff
- `docker-compose down`: remove images and network
- `docker-compose up -d`: run in the background
- `docker-compose up --build` or `docker-compose --build`: to RE-build the image


### Other usefull docker commands
- `docker system prune`: clean up any resources — images, containers, volumes, and networks — that are dangling (not associated with a container)
- `docker system prune -a`: remove any stopped containers and all unused images
- `docker images -a`: will show you every image, including intermediate image layers
- `docker-compose config`: you’ll see how the docker-compose.yml file content looks after the substitution step has been performed without running anything else
- `docker-compose ps`: docker entrypoints, really useful if you want to see the address and ports of all services running in the container
