FROM node:latest
LABEL maintainer "Elvis Bando <elvisbando@gmail.com>"
ENV DEBIAN_FRONTEND noninteractive

# Use the official Node.js image as the base image
FROM node:latest AS build

# Set the working directory
ADD ./web /home/ubuntu/app
WORKDIR /home/ubuntu/app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight server to serve the app
FROM nginx:alpine

COPY --from=build /home/ubuntu/app/nginx.conf /etc/nginx/nginx.conf 
# Copy the build files to the nginx server
COPY --from=build /home/ubuntu/app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80