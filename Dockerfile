# Stage 1: Build the application
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the application using Vite's preview mode
CMD ["npm", "run", "dev"]
