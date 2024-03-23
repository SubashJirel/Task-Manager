# Express Task Manager

Welcome to the Express Task Manager project! This is a basic CRUD web application built using Express.js, MongoDB, and Mongoose. It allows users to manage their tasks effectively.

## Project Setup

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Create a `.env` file in the root directory of the project.
5. In the `.env` file, set the `MONGO_URI` variable equal to your MongoDB connection string. Example: `MONGO_URI=mongodb://localhost:27017/task_manager`.
6. Save the `.env` file.
7. Run `npm start` to start the Express server.

**Note:** Ensure you have MongoDB installed and running on your machine before running the project.

## Usage

Once the server is running, you can access the application at `http://localhost:5000` in your web browser.

The application provides the following endpoints:

- `GET /tasks`: Get all tasks.
- `GET /tasks/:id`: Get a specific task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.

## Port Configuration

To avoid port collisions, the server is configured to run on port `5000` by default. If you need to change the port, you can do so in the source code.

## License

This project is licensed under the [MIT License](LICENSE).
