FROM node:18-alpine AS build
LABEL maintainer "Elvis Bando <elvisbando@gmail.com>"
WORKDIR /app

# Install dependencies and build the client and server bundle
COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy built artifacts and install production deps
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm ci --production --silent || true

EXPOSE 5000
CMD ["node", "dist/index.js"]