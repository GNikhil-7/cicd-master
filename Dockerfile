# Base image
FROM node:18

# App directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]