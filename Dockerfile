# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# 安装 pnpm
RUN npm install -g pnpm

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ["package.json", "pnpm-lock.yaml", "./"]

# Install app dependencies
RUN pnpm i

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN pnpm build

# Expose server port
EXPOSE 3000

# Start the server using the production build
CMD ["pnpm", "start:prod"]
