#! /bin/bash

echo "------ executing startup script --------"

echo $FIREBASE_API_KEY

sed -i  "s/FIREBASE_API_KEY/${FIREBASE_API_KEY}/g" ./public/js/config.js
sed -i  "s/FIREBASE_AUTH_DOMAIN/${FIREBASE_AUTH_DOMAIN}/g" ./public/js/config.js
sed -i  "s/FIREBASE_PROJECT_ID/${FIREBASE_PROJECT_ID}/g" ./public/js/config.js
sed -i  "s/FIREBASE_STORAGE_BUCKET/${FIREBASE_STORAGE_BUCKET}/g" ./public/js/config.js
sed -i  "s/FIREBASE_MESSAGING_SENDER_ID/${FIREBASE_MESSAGING_SENDER_ID}/g" ./public/js/config.js
sed -i  "s/FIREBASE_APPID/${FIREBASE_APPID}/g" ./public/js/config.js
sed -i  "s/FIREBASE_MEASUREMENT_ID/${FIREBASE_MEASUREMENT_ID}/g" ./public/js/config.js
sed -i  "s/GOOGLE_OAUTH_CLIENT_ID/${GOOGLE_OAUTH_CLIENT_ID}/g" ./public/js/config.js

cat ./public/js/config.js

sed -i  "s/FIREBASE_API_KEY/${FIREBASE_API_KEY}/g" ./.env
sed -i  "s/FIREBASE_AUTH_DOMAIN/${FIREBASE_AUTH_DOMAIN}/g" ./.env
sed -i  "s/FIREBASE_PROJECT_ID/${FIREBASE_PROJECT_ID}/g" ./.env
sed -i  "s/FIREBASE_STORAGE_BUCKET/${FIREBASE_STORAGE_BUCKET}/g" ./.env
sed -i  "s/FIREBASE_MESSAGING_SENDER_ID/${FIREBASE_MESSAGING_SENDER_ID}/g" ./.env
sed -i  "s/FIREBASE_APPID/${FIREBASE_APPID}/g" ./.env
sed -i  "s/FIREBASE_MEASUREMENT_ID/${FIREBASE_MEASUREMENT_ID}/g" ./.env
sed -i  "s/GOOGLE_OAUTH_CLIENT_ID/${GOOGLE_OAUTH_CLIENT_ID}/g" ./.env


node ./src/app.js