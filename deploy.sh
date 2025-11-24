#!/bin/bash
# Deployment script for Vercel

echo "Starting deployment process..."

# Navigate to frontend directory
cd frontend

# Install dependencies with legacy peer deps to handle React 19 compatibility
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Build the application
echo "Building application..."
npm run build

echo "Deployment preparation complete!"