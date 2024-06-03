# Favmovie

FavMovie is a web application that allows users to browse, search, and save their favorite movies. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Hosted Link](#hosted-link)

## Features
- Browse a list of movies
- Search for movies
- Save favorite movies
- User authentication

## Tech Stack
- **Frontend:** React, Bootstrap, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- npm or yarn
- MongoDB (MongoDB Atlas or local MongoDB)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kirandudala/FavMovie.git
    cd FavMovie
    ```

2. **Set up MongoDB:**
    - Create a MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or use your local MongoDB.
    - Obtain the connection string for your MongoDB database.

3. **Configure environment variables:**
    - Create a `.env` file in the `FavMovie-Backend` directory and add the following variables:
      ```plaintext
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      PORT="3001"
      ```

4. **Install frontend dependencies:**
    ```bash
    cd FavMovie-frontend
    npm install
    ```

5. **Install backend dependencies:**
    ```bash
    cd ../FavMovie-Backend
    npm install
    ```

## Running the Application

1. **Start the backend server:**
    ```bash
    cd FavMovie-Backend
    npm start
    ```

2. **Start the frontend server:**
    ```bash
    cd ../FavMovie-frontend
    npm start
    ```

3. **Access the application:**
    - Open your browser and navigate to `http://localhost:3000`

## Project Structure
```plaintext
FavMovie/
│
├── FavMovie-frontend/       # Frontend application
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── FavMovie-Backend/        # Backend application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── README.md
└── ...

```
## Hosted Link 

Try Website on "https://favmovie-frontend.onrender.com"

