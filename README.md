# Fullstack_web_app
# 🚀 Team Task Manager (Full-Stack)

A simple full-stack web application to manage team tasks with role-based access. Users can create tasks, assign them, and track progress.

---

## 📌 Features

* 👤 User Signup (Admin / Member roles)
* 📝 Task Creation & Assignment
* 📊 View All Tasks
* 🔄 Update Task Status (Todo → Done)
* 🛡️ Basic Role-Based Access (Admin vs Member)
* 🌐 REST API integration

---

## 🛠️ Tech Stack

**Frontend:**

* HTML
* JavaScript (Fetch API)

**Backend:**

* Node.js
* Express.js

**Data Storage:**

* In-memory (temporary storage)

---

## 📁 Project Structure

```
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
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️⃣ Start Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:
👉 http://localhost:5000

---

### 2️⃣ Start Frontend

```bash
cd frontend
start index.html
```

OR manually open `index.html` in browser.

---

## 🔌 API Endpoints

### Authentication

* `POST /signup` → Create user
* `POST /login` → Login user

### Tasks

* `POST /tasks` → Create task
* `GET /tasks` → Get all tasks
* `PUT /tasks/:id` → Update task status

---

## 🧪 Usage

1. Signup as Admin or Member
2. Create tasks (Admin)
3. View tasks list
4. Update task status

---

## ⚠️ Limitations

* No database (data resets on server restart)
* Basic authentication (no JWT)
* Minimal UI (focus on functionality)

---

## 🚀 Future Improvements

* Integrate MongoDB database
* Add JWT authentication
* Implement full project management
* Improve UI with React
* Deploy backend using Railway

---

## 🌐 Live Demo

file:///D:/task-manager/frontend/index.html

---

## 👨‍💻 Author

Chowdam Dharani Priya

---

## 📄 License

This project is created for assessment purposes.
