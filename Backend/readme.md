# Backend Project

This project is a Node.js Express backend that connects to MongoDB and exposes APIs for creating and fetching posts.

## Prerequisites

- Node.js installed
- npm installed
- MongoDB connection available through the configured Atlas URI in the project

## Run the project

From the project folder:

```bash
cd "f:\Backend-Project"
npm install
npm start

npx nodemon server.js
```

The server will start on:

```text
http://localhost:3000
```

## Available endpoints

- POST /create-post
  - Upload an image and caption
- GET /get-posts
  - Fetch all posts

## Notes

The app entry point is `server.js`, and the start script is already configured in `package.json`.
