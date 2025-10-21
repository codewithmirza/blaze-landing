#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Starting deployment build...');

try {
  console.log('📦 Building Next.js application...');
  execSync('npx next build', { stdio: 'inherit' });
  
  console.log('☁️ Building OpenNext for Cloudflare...');
  execSync('npx opennextjs-cloudflare build', { stdio: 'inherit' });
  
  console.log('✅ Build complete! Ready for deployment.');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}