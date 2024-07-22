# Stage 1: Build the application
FROM node:21 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the project (includes building Storybook)
RUN npm run build-storybook

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Storybook static files from the build stage
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Expose the port for Storybook
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
