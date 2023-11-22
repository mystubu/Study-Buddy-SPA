#!/bin/sh

# Run npm install
npm install

if [ "$ENV" = "production" ]; then
  npm run build

elif [ "$ENV" = "development" ]; then
  npm run start
fi