# Task Manager API

This is the backend API for the Task Manager application, built using Node.js and Express, with a database powered by MongoDB.

##### Deployed Link: https://task-management-api-h92p.onrender.com

## Features

- API endpoints to manage tasks
- MongoDB for data persistence
- Express.js for handling requests

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- dotenv (for environment variables)
- cors (for cross-origin resource sharing)
- nodemon (for development ease)

## Getting Started

### 1. Clone the Repository

```sh
git clone git@github.com:gitxAnkit/task-management-api.git
cd task-management-api
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/task-manager
```

Replace `<username>` and `<password>` with your actual MongoDB credentials.

### 4. Run the Server

```sh
npm start
```

## API Endpoints

### Base URL: `http://localhost:4000/api/v1`

### 1. Get All Tasks

```http
GET /api/v1/tasks
```

### 2. Create a Task

```http
POST /api/v1/tasks
```

Request Body:

```json
{
  "title": "New Task",
  "description": "Task details",
  "status": "pending",
  "deadline": "2025-03-20"
}
```

### 3. Delete a Task

```http
DELETE /api/task/:taskId
```
