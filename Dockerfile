# Use the "oven/bun:latest" image as the base image
FROM oven/bun:latest

# Set the working directory within the container to "/app"
WORKDIR /app

# Copy the package.json file to the container (used for npm/yarn dependencies)
COPY package.json ./

# Copy the "prisma" directory to the container
COPY prisma ./prisma/

# Update the package manager and install OpenSSL
RUN apt-get -qy update && apt-get -qy install openssl

# Install dependencies using "bun"
RUN bun install

# Generate Prisma client code
RUN bun prisma:generate

# Copy the rest of the application files to the container
COPY . .

# Expose port 9697 (if the application listens on this port)
EXPOSE 9698

# Run the NestJS application using "bun dev" as the command
CMD [ "bun", "dev" ]
