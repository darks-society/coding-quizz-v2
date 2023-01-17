FROM node:16-alpine

#USER root

# Install the required version of Python
RUN apk add --no-cache python3

# Set the default Python executable to the installed version
ENV PYTHON python3

# Set the working directory
WORKDIR /app

# Install Snowpack and the serve package
#RUN npm install -g snowpack serve

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

#EXPOSE 8080

# Build the application with Snowpack
RUN npm run build

# Run the application with serve
CMD ["npm", "run", "serve"]


