# Use a smaller base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY src ./src
COPY tsconfig.json ./

# Build the TypeScript code
RUN npm run build

# Expose the port and set the command
EXPOSE 3000
CMD ["node", "dist/src/index.js"]
