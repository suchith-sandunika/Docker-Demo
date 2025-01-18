# base image 
FROM node:20-alpine

# run nodemon
RUN npm install -g nodemon

# set working directory
WORKDIR /app 

# copy package.json and package.lock.json 
COPY package.json .

# install dependencies
RUN npm install

# copy the files 
COPY . .  

# expose port 8000
EXPOSE 8000

# run the application
CMD ["npm", "run", "start"]