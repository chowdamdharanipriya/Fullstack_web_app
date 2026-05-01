const API = "http://localhost:5000";

// Signup
async function signup() {
  await fetch(API + "/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      role: role.value
    })
  });
  alert("User created");
}

// Create Task
async function createTask() {
  await fetch(API + "/tasks", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: title.value,
      assignedTo: assignedTo.value,
      status: "Todo",
      dueDate: dueDate.value
    })
  });
  alert("Task added");
}

// Get Tasks
async function getTasks() {
  const res = await fetch(API + "/tasks");
  const data = await res.json();

  tasks.innerHTML = "";

  data.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `${t.title} - ${t.status}`;
    tasks.appendChild(li);
  });
}