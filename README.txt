Team Task Manager (Full-Stack Assignment)

Overview:
This is a simple Team Task Manager web application where users can sign up, create tasks, and track task status. The application demonstrates basic full-stack functionality including backend APIs and frontend interaction.

Features:

* User Signup with role selection (Admin / Member)
* Task creation with title, assigned user, and due date
* View all tasks
* Update task status
* Basic role-based logic (Admin creates tasks)

Tech Stack:

* Backend: Node.js, Express.js
* Frontend: HTML, JavaScript
* Data Storage: In-memory (for demonstration)

Project Structure:
task-manager/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   └── script.js
│
└── README.txt

How to Run the Project:

1. Start Backend:

   * Open terminal
   * Navigate to backend folder:
     cd backend
   * Install dependencies:
     npm install
   * Run server:
     node server.js

2. Start Frontend:

   * Open frontend folder
   * Double click index.html
   * OR run:
     start index.html

3. Access:

   * Backend runs on: http://localhost:5000
   * Frontend runs in browser

API Endpoints:

Auth:

* POST /signup → Create user
* POST /login → Login user

Tasks:

* POST /tasks → Create task
* GET /tasks → Get all tasks
* PUT /tasks/:id → Update task status

Notes:

* This is a minimal implementation built under time constraints
* Data is stored temporarily (no database integration)
* Focus is on functionality and API structure

Future Improvements:

* Add database (MongoDB)
* Implement secure authentication (JWT)
* Add project management module
* Improve UI with React
* Deploy using Railway

Submission Includes:

* Live Application URL: file:///D:/task-manager/frontend/index.html
* GitHub Repository: https://github.com/chowdamdharanipriya/Fullstack_web_app

Thank You
