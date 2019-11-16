FROM node:10.16.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

#RUN npm run build --production

# In your Dockerfile.
RUN npm install -g serve

# Run serve when the image is run.
#CMD serve -s build

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

