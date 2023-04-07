## Firebase Web App with Node and Google Auth

This is a web app written in Node.js that includes Firebase authentication to Google. It is containerized to run in a Docker container.

You can find the source code for this app on [GitHub](https://github.com/jlaude/firebase-web-app).

### Installation

To install and run this app, follow these steps:

1. Clone the GitHub repository:

git clone https://github.com/jlaude/firebase-web-app.git


2. Navigate to the project directory:

cd firebase-web-app


3. Install the dependencies:

npm install


4. Create a Firebase project and set up Google authentication:

- Go to the [Firebase console](https://console.firebase.google.com/) and create a new project.
- In the project settings, add a new web app and copy the configuration values.
- Enable Google authentication in the Firebase Authentication section of the console and add the appropriate redirect URLs.

5. Build the Docker container:

docker build -t firebase-web-app .

6. Run the docker container:

Pass the following environment variables to your conatiner when running:

FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APPID
FIREBASE_MEASUREMENT_ID
GOOGLE_OAUTH_CLIENT_ID

7. Open the app in your web browser:

http://localhost:8080/


### Usage

Once the app is running, you can sign in with your Google account to access the protected pages. You can also sign out by clicking the "Sign out" button.
