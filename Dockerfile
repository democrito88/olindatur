# Versão com Apache ou Nginx
# Etapa 1: Build da aplicação
#FROM node:18 AS builder
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build

# Versão com Nginx
# Etapa 2: Servir arquivos estáticos com Nginx
#FROM debian:bullseye
#RUN apt-get update && apt-get install -y nginx && apt-get clean
#COPY --from=builder /app/dist /usr/share/nginx/html

#CMD ["nginx", "-g", "daemon off;"]
#EXPOSE 80

# Versão com Apache
# Etapa 2: Configurar e servir com Apache
#FROM debian:bullseye
#RUN apt-get update && apt-get install -y apache2 && apt-get clean
#COPY --from=builder /app/dist /var/www/html
#RUN a2enmod rewrite
#CMD ["apachectl", "-D", "FOREGROUND"]
#EXPOSE 80


# Versão com Node.js
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