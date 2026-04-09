#!/bin/bash
set -e

# Deployment Script for elvis01

echo "Starting deployment update..."

# 1. Stop the running server (if any)
echo "Stopping any running 'npm run dev' process..."
pkill -f "npm run dev" || echo "No process found to stop."
sleep 1

# 2. Pull changes from GitHub
echo "Pulling latest changes from GitHub..."
git pull origin main

# 3. Update dependencies
echo "Updating dependencies..."
npm install

# 4. Restart the server
echo "Restarting server..."
nohup npm run dev > app.log 2>&1 &
echo $! > app.pid

echo "Deployment update complete! Server is restarting in background."
echo "Logs are being written to app.log"
echo "Server PID saved to app.pid"
