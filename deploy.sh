#!/bin/bash
# Deploy script that builds both Next.js and OpenNext
echo "Building Next.js application..."
npx next build

echo "Building OpenNext for Cloudflare..."
npx opennextjs-cloudflare build

echo "Deploying to Cloudflare..."
npx wrangler deploy

echo "Deployment complete!"