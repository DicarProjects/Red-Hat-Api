# Use a Node.js base image
FROM node:18.18.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Eliminar el directorio node_modules si existe
RUN rm -rf node_modules

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies with the --legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Install necessary libraries
RUN npm install nodemailer
RUN npm install validator
RUN npm install cors

# Copy the rest of the files to the working directory
COPY . .

# Run the npm run build command - copy the template.html file to the dist folder
RUN npm run build

# Expose port 8080
EXPOSE 3000

# Comando para iniciar la aplicación Node.js
CMD ["npm", "start"]
