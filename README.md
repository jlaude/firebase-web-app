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

5. Set the environment variables:

- copy startup.sh.example to startup.sh
- update the sed commands with the variables applicable to your firebase project

6. Build and run the Docker container:

docker build -t firebase-web-app .
docker run firebase-web-app

7. Open the app in your web browser:

http://localhost:8080/


### Usage

Once the app is running, you can sign in with your Google account to access the protected pages. You can also sign out by clicking the "Sign out" button.
