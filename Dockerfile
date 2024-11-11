# Start with Rust base image
FROM rust:latest

WORKDIR /usr/src/app

# Copy source files
COPY . .

# Install dependencies
RUN cargo build --release

# Expose the web server port
EXPOSE 8000

CMD ["cargo", "run", "--release"]
