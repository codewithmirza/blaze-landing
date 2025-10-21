#!/bin/bash
# Build script for deployment
echo "Building Next.js application..."
next build

echo "Building OpenNext for Cloudflare..."
npx opennextjs-cloudflare build

echo "Build complete!"