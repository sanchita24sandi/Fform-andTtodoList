document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorMsg.textContent = "⚠️ All fields are required!";
  } else if (!emailPattern.test(email)) {
    errorMsg.textContent = "⚠️ Please enter a valid email!";
  } else {
    errorMsg.textContent = "";
    alert("Form submitted successfully ✅");
    document.getElementById("contactForm").reset();
  }
});


// to do list 
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("⚠️ Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;
  taskList.appendChild(li);

  taskInput.value = ""; // clear input
}

function removeTask(button) {
  button.parentElement.remove();
}
