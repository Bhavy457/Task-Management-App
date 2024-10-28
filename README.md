# Task-Management-App
 
## Overview
This project is a **Task Management Web Application** developed to create, view, update, and delete tasks. The application includes a backend API built with Node.js, Express, and MongoDB, and a responsive frontend to interact with the API. Additional functionalities include error handling for invalid inputs and routes, and it is deployed on Render.

- **Deployment Link**: [https://mern-task-app-2u6j.onrender.com/](https://mern-task-app-2u6j.onrender.com/)
- **API Base URL**: `http://localhost:5000/api/tasks`
- **API Testing**: Tested using Postman for all CRUD operations

---

## Key Features
- **Responsive Frontend**: Developed with a modern frontend framework (React/Vue/Angular) for a smooth user experience on different screen sizes.
- **Backend API**: RESTful API to manage tasks, integrated with MongoDB for persistent storage.
- **Error Handling**: Comprehensive error handling for invalid data inputs, incorrect routes, and server errors.
- **Authentication (Bonus)**: Optional user authentication for task operations.
- **Deployment**: Deployed to Render for easy access.

---

## API Endpoints

### 1. Fetch All Tasks
- **Endpoint**: `GET /tasks`
- **Description**: Retrieve a list of all tasks.
- **Response**:
  - Status `200`: Returns an array of all tasks.
  - Status `500`: Error message if fetching tasks fails.

### 2. Fetch a Single Task by ID
- **Endpoint**: `GET /tasks/:id`
- **Parameters**: 
  - `id` - The unique identifier for the task
- **Description**: Retrieve details of a specific task by its ID.
- **Response**:
  - Status `200`: Returns the task data.
  - Status `404`: If no task is found with the specified ID.
  - Status `500`: Error message if fetching task fails.

### 3. Add a New Task
- **Endpoint**: `POST /tasks`
- **Description**: Create a new task with the provided data in the request body.
- **Request Body**:
  - JSON object with task details.
- **Response**:
  - Status `200`: Returns the created task data.
  - Status `500`: Error message if task creation fails.

### 4. Update a Task by ID
- **Endpoint**: `PUT /tasks/:id`
- **Parameters**:
  - `id` - The unique identifier for the task
- **Description**: Update an existing task with new data provided in the request body.
- **Request Body**:
  - JSON object with updated task details.
- **Response**:
  - Status `200`: Returns the updated task data.
  - Status `404`: If no task is found with the specified ID.
  - Status `500`: Error message if updating task fails.

### 5. Delete a Task by ID
- **Endpoint**: `DELETE /tasks/:id`
- **Parameters**:
  - `id` - The unique identifier for the task
- **Description**: Delete an existing task by its ID.
- **Response**:
  - Status `200`: Confirmation message of task deletion.
  - Status `404`: If no task is found with the specified ID.
  - Status `500`: Error message if task deletion fails.

---

## Project Setup

### Prerequisites
- **Node.js**: Ensure Node.js and npm are installed.
- **MongoDB**: MongoDB should be running locally or in a cloud instance.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   cd task-management-web-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory with MongoDB connection URI, e.g., `MONGO_URI=<your_mongodb_connection_string>`.

4. **Run the Application**:
   ```bash
   npm start
   ```
   The backend server will start on `http://localhost:5000`.

5. **Run Frontend**: Follow instructions in the frontend folder to start the UI and connect it to the backend API.

---

## Authentication (In-Process)
- User registration
- User login/logout
- Protected routes for task creation, updating, and deletion

---

## Frontend Views

### 1. List View
- Displays all tasks with delete functionality.

### 2. Details View
- Shows details of a selected task.

### 3. Add/Edit View
- Form to add a new task or edit an existing task.

---

## Deployment

The application is deployed on Render with a live link available at [https://mern-task-app-2u6j.onrender.com/](https://mern-task-app-2u6j.onrender.com/). The backend and frontend are hosted to provide a seamless user experience.

---

This documentation outlines the essential aspects of the Task Management Web Application, ensuring ease of setup, understanding of functionality, and guidance for future updates and testing.
