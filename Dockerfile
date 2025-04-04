# Stage 1: Build the VuePress site
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Stage 2: Run the site with Node.js
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/docs/src/.vuepress/dist /app/dist
RUN npm install -g serve

# Use "serve" to host the site
CMD ["serve", "-s", "/app/dist", "-l", "8080"]
