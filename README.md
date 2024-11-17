# Unified Blog App

A Simple Blog App built with React, Node.js, Express, and MongoDB. This project allows users to create, read, update, and delete blog posts.

## Repository Link
- Code: [Blog App](https://github.com/Tr4ce007/BlogApp)

## Features
- User authentication and authorization
- Create, read, update, and delete blog posts
- Liking on blog posts
- Search for blog posts
- Responsive design for mobile and desktop

## Table of Contents

- [Deployed App URL](#deployed-app-url)
- [Project Setup](#project-setup)
- [Authentication Flow](#authentication-flow)
- [API Endpoints](#api-endpoints)

## Deployed App URL

- Frontend: [Unified Blog App](https://unified-blog.onrender.com/)
- Backend: [Unified Blog App API](https://unified-blog-api.onrender.com/)

## Project Setup

Follow these steps to set up the project locally:
- node v18.16.0
- git clone https://github.com/Tr4ce007/BlogApp.git

To Run Frontend:  

    1. `cd client`
    2. `npm i --legacy-peer-deps`
    3. `npm start`

To Run Backend:  

    (Make sure to creaete a .env file in the server folder like the .env.example file)  

    1. `cd server`
    2. `npm install`
    3. `npm start` || `node index.js`

### Prerequisites

- Node.js (version 18.16.0)
- npm (Node package manager)
- MongoDB
- .env file with variables initialised (see .env.example)
- Default localhost port 5000 for backend


## Authentication Flow

This project uses **JWT (JSON Web Tokens)** to handle user authentication. Below is a step-by-step explanation of how the authentication flow works in the application.

### 1. **User Login**
The user logs in by sending their credentials (email and password) to the `/user/signin` endpoint. If the credentials are valid, the server generates a JWT token and sends it back in the response. This token is used for authenticating subsequent requests.

### 2. **User Registration**
The user registers by sending their credentials (email, firstName, lastName and password) to the `/user/signup` endpoint. The server generates a JWT token and sends it back in the response. This token is used for authenticating subsequent requests.

### 3. **User Authentication**
In subsequent requests, the user includes the JWT token in the `Authorization` header of the request. The server verifies the token's validity and extracts the user ID from it. If the token is valid, the server proceeds with the requested operation.

### 4. **Token Expiration**
The JWT token has an expiration time 1 hour. Once the token expires, the user needs to log in again to obtain a new token.

## API Endpoints
The following API endpoints are available for interacting with the application:
### 1. **User Authentication**
- POST `/user/signin` - User login endpoint.
- POST `/user/signup` - User registration endpoint.
### 2. **Blog Posts**
- POST `/blogs` - Create a new blog post.
- PATCH `/blogs/:id` - Update an existing blog post.
- DELETE `/blog/delete/:id` - Delete a blog post.
- PATCH `/blog/like/:id` - Like a blog post.
- GET `/blogs/:id` - Get a blog post by ID.
- GET `/blogs` - Get all blog posts.
- GET `/blogs/search` - Search for blog posts.
