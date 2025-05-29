Task Tracker (To-Do List) 

This repository contains the backend and frontend code for a Task Tracker (To-Do List) application that allows users to add, update, delete, filter, and search tasks.

Technologies Used Backend

Node.js
Express.js
MongoDB (or other database, based on your backend)
Mongoose (for MongoDB ODM)
Axios (for frontend API calls)
CORS


Requirements

Node.js (v14 or higher recommended)
MongoDB (locally installed or cloud-hosted e.g., MongoDB Atlas)
npm 

Installation & Setup

Clone the repo and navigate to backend directory
cd Backend

Install dependencies

npm i express mongoose
npm i bcrypt
npm i jsonwebtoken
npm i dotenv   
npm i cors

Configure environment variables

Create a .env file in the backend root folder with contents:
PORT=5000
MONGODB_URI=your_mongodb_connection_string

Start Server

npm run dev

API Endpoints

GET /tasks - Get all tasks 
POST /tasks - Add a new task
PUT /tasks/:id - Update a task (text, completed status)
DELETE /tasks/:id - Delete a task
GET /tasks/stats - Get status about tasks (total, completed, percentage completed)



Technologies Used Backend

React.js
Axios (for API requests)
CSS (custom styles)

Installation & Setup
Create React app
npx create-react-app frontend
Navigate to the frontend directory
cd frontend


Install dependencies

npm install
npm i axios
npm install react-router-dom

Start the frontend development server

npm start

Configuration
Make sure your backend server is running on http://localhost:5000 or update the API base URL in the React app accordingly (src/components/Task.js or wherever API calls happen).

Database
This app uses MongoDB as the primary database to store task documents .


Additional Technologies Used

JWT Token (JSON Web Token)Used to securely transmit user authentication data (login and register)between frontend and backend.
Helps protect routes by verifying if the request is from an authenticated user.

bcrypt Used to hash user passwords before storing them in the database for enhanced security.
Prevents exposure of raw passwords in case of data leaks or attacks.

CORS (Cross-Origin Resource Sharing)Enables the frontend (running on a different port) to communicate with the backend.
Prevents browser CORS policy errors when making API requests from frontend to backend.




