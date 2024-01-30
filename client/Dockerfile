# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 5173

# Command to build and serve the Vite application
CMD ["npm", "run", "serve"]
