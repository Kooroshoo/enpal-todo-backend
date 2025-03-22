# Enpal Todo Backend

This repository contains the backend for the Enpal Todo List project built with NestJS. It implements a REST API to manage Todo tasks and integrates with PostgreSQL using TypeORM.

## Features

- **Todo Endpoints:**
  - Create a new task
  - Retrieve the list of tasks
  - Update a task (mark as completed/uncompleted)
  - Delete a task

- **Database Integration:**
  - Uses TypeORM for ORM functionality
  - Configured to work with PostgreSQL

## Technologies Used

- NestJS (v9+) for building the REST API
- TypeORM for database operations
- PostgreSQL as the database
- Node.js (latest LTS recommended)
- npm for dependency management

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Kooroshoo/enpal-todo-backend.git
   cd enpal-todo-backend
   ```
2. **Install Dependencies:**

   ```bash
   cd todo-backend
   npm install
   ```

## Running the Application

### Using Docker Compose (Recommended):

  If you have Docker and Docker Compose installed, you can quickly run the entire backend stack (including PostgreSQL)         using Docker Compose.

  1. **Ensure Docker is running.**
  2. **Run Docker Compose from the repository root:**

     ```bash
     docker-compose up
     ```
   3. **Access the API:**

        The backend will be available at http://localhost:3000.
        PostgreSQL will be available on port 5432 as configured in the docker-compose.yml file.

### Without Docker Compose (Not Recommended):

  If you prefer running the backend directly on your machine:

  1. **Ensure PostgreSQL is installed and running on your system.**
     
     Make sure your database credentials in your TypeORM configuration (in app.module.ts) match your local PostgreSQL setup.

  2. **Run the Application:**
     
      From the todo-backend folder, run:

     ```bash
     npm run start:dev
     ```

     This will start the NestJS application in development mode. Access the API at http://localhost:3000.

### Configuration and Environment Variables ###

- **TypeORM Configuration:**

  The configuration is set in ```app.module.ts``` to interact with PostgreSQL.

- **Important:**

  synchronize: true is enabled in ```app.module.ts``` for development. Disable it in production to prevent accidental data loss.

- **CORS:**

  CORS is enabled in ```main.ts``` to allow the Angular frontend to communicate with the API.



     

