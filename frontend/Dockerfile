# Use a Node.js base image for building
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /usr/src/app

# Set build arguments
ARG NODE_ENV=development
ARG API_URL

# Set environment variables for the build stage
ENV NODE_ENV=$NODE_ENV
ENV API_URL=$API_URL

# Copy package.json and pnpm-lock.yaml to leverage Docker caching
COPY package.json /usr/src/app/

# Install all dependencies
RUN pnpm install

# Copy the entire application source
COPY . .

# Build the Next.js app if in production mode
RUN if [ "$NODE_ENV" = "production" ]; then pnpm build; fi

# Production stage
FROM node:18-alpine AS runner

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /usr/src/app

RUN pnpm config set store-dir /usr/src/app/.pnpm-store

# Set environment variables for the runtime stage
ARG NODE_ENV=production
ARG API_URL
ENV NODE_ENV=$NODE_ENV
ENV API_URL=$API_URL

# Copy only necessary files from builder stage
COPY --from=builder /usr/src/app/package.json /usr/src/app/
COPY --from=builder /usr/src/app/public /usr/src/app/public

# Install only production dependencies
RUN if [ "$NODE_ENV" = "production" ]; then pnpm install --prod; else pnpm install; fi

# Expose the port Next.js runs on
EXPOSE 3000

# Conditional start command based on environment
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then pnpm start; else pnpm dev; fi"]
