#!/bin/bash

set -e

echo "Building project..."
npm run build

echo "Adding gh-pages worktree..."
git worktree add gh-pages-dist gh-pages

echo "Copying built files..."
cp -r dist/* gh-pages-dist/

echo "Committing and pushing to gh-pages..."
cd gh-pages-dist
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
cd ..

echo "Cleaning up worktree..."
git worktree remove gh-pages-dist --force
rm -rf gh-pages-dist
git worktree prune

echo "✅ Deployment complete!"
echo "🌍 Visit: https://demjrhan.github.io/portfolio"
