FROM node:18

# Set the working directory
WORKDIR /home/node/app

# Copy only package.json and package-lock.json first for better caching
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY app .

# Start the app
CMD ["node", "index.js"]
