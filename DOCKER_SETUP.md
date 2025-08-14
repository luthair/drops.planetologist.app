# Docker Setup Guide

This guide helps you run the Dune: Awakening Drops Tracker using Docker.

## 🚀 Quick Start

### Prerequisites
- Docker installed on your system
- Docker Compose installed
- Your Twitch API credentials

### 1. Environment Setup

Create a `.env` file in the project root with your Twitch credentials:

```bash
TWITCH_CLIENT_ID=your_actual_client_id_here
TWITCH_CLIENT_SECRET=your_actual_client_secret_here
```

⚠️ **Important**: These environment variables are required at **build time** because the Next.js app validates them during the build process.

### 2. Build and Run

```bash
# Build and start the container
docker-compose up --build

# Or run in background
docker-compose up --build -d
```

### 3. Access the Application

- **URL**: http://localhost:3010
- **API**: http://localhost:3010/api/streamers

## 🛠️ Docker Commands

### Development Commands

```bash
# Build the image
docker-compose build

# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# Restart services
docker-compose restart
```

### Production Commands

```bash
# Build and run optimized production build
docker-compose up --build -d

# Check container status
docker-compose ps

# View resource usage
docker stats dune-drops-tracker
```

## 🔧 Configuration

### Port Configuration
The application runs on port **3010** by default. To change:

1. Update `docker-compose.yml`:
   ```yaml
   ports:
     - "YOUR_PORT:3010"
   ```

2. Update environment variables if needed:
   ```yaml
   environment:
     - PORT=3010  # Internal port (keep as 3010)
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TWITCH_CLIENT_ID` | Your Twitch App Client ID | ✅ Yes |
| `TWITCH_CLIENT_SECRET` | Your Twitch App Client Secret | ✅ Yes |
| `NODE_ENV` | Environment (production/development) | Auto-set |
| `PORT` | Internal port (3010) | Auto-set |

### Resource Limits

Current limits (adjustable in docker-compose.yml):
- **CPU**: 1.0 core max, 0.5 core reserved
- **Memory**: 512MB max, 256MB reserved

## 🔍 Troubleshooting

### Container Won't Start
```bash
# Check logs for errors
docker-compose logs dune-drops-tracker

# Check if port is already in use
netstat -an | grep 3010
```

### Environment Variables Not Working
```bash
# Verify .env file exists and has correct format
cat .env

# Check if variables are loaded
docker-compose config

# Restart with fresh environment
docker-compose down
docker-compose up --build
```

### Build Fails with "Invalid environment variables"
This happens when the `.env` file is missing or incorrectly formatted:

```bash
# 1. Ensure .env file exists in project root
ls -la .env

# 2. Check .env file format (no quotes around values)
cat .env
# Should look like:
# TWITCH_CLIENT_ID=abc123
# TWITCH_CLIENT_SECRET=def456

# 3. Rebuild with environment variables
docker-compose up --build
```

### Build Errors
```bash
# Clean build (removes cache)
docker-compose build --no-cache

# Check Docker system
docker system df
docker system prune  # Clean unused data
```

## 📊 Health Monitoring

The container includes a health check that:
- Tests the `/api/streamers` endpoint every 30 seconds
- Considers the app unhealthy after 3 failed attempts
- Has a 40-second startup grace period

Check health status:
```bash
docker-compose ps
```

## 🚀 Production Deployment

For production deployment:

1. **Use environment files**:
   ```bash
   # Create production.env
   TWITCH_CLIENT_ID=prod_client_id
   TWITCH_CLIENT_SECRET=prod_secret
   
   # Run with specific env file
   docker-compose --env-file production.env up -d
   ```

2. **Enable logging**:
   ```yaml
   # Add to docker-compose.yml
   logging:
     driver: "json-file"
     options:
       max-size: "10m"
       max-file: "3"
   ```

3. **Use reverse proxy** (nginx, Traefik, etc.) for SSL and domain routing

## 🔄 Updates

To update the application:

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose up --build -d

# Clean up old images (optional)
docker image prune
```

---

**Your Dune: Awakening Drops Tracker is now ready to run in Docker! 🐳**
