# Install Node.js
FROM node:latest

# Create app directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY ./src .

# Expose port 3000 to the container
EXPOSE 3000

# Run the app
CMD [ "node", "app.js" ]
