# base image 
FROM node:20-alpine

# set working directory
WORKDIR /app 

# copy package.json and package.lock.json 
COPY package.json .

# install dependencies
RUN npm install

# copy the files 
COPY . .  

# expose port 8000
EXPOSE 5173

# run the application
CMD ["npm", "run", "dev"]