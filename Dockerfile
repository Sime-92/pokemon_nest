# Use the latest Node.js version as the base image
FROM node:18

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for efficient Docker caching
COPY package*.json ./

# Install all dependencies first (needed for building the app)
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Install only the production dependencies to keep the image size small
RUN npm install --omit=dev

# Expose port 3000 to be accessible from the host
EXPOSE 3000

# The command to run the application
CMD ["node", "dist/main"]
