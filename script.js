/* DASHBOARD PROTECTION */
const loggedInUser = localStorage.getItem("loggedInUser");

// If on dashboard and not logged in → redirect
if (window.location.pathname.includes("dashboard.html") && !loggedInUser) {
  window.location.href = "register.html";
}

function calculateTrust() {
  let trustScore = 50;

  let rating = parseInt(document.getElementById("rating").value);
  let delivery = document.getElementById("delivery").value;
  let complaint = document.getElementById("complaint").value;

  if (!rating) {
    alert("Please enter a rating");
    return;
  }

  trustScore += rating * 5;

  if (delivery === "yes") trustScore += 10;
  if (complaint === "yes") trustScore -= 10;

  if (trustScore > 100) trustScore = 100;
  if (trustScore < 0) trustScore = 0;

  document.getElementById("score").innerText = trustScore;
}

const loginLink = document.getElementById("loginLink");
if (loginLink) {
  loginLink.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

function login() {
  const businessName = document.getElementById("businessName").value;
  const password = document.getElementById("password").value;

  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (!savedUser) {
    document.getElementById("error").innerText =
      "No account found. Please register.";
    return;
  }

  if (
    businessName === savedUser.businessName &&
    password === savedUser.password
  ) {
    localStorage.setItem("loggedInUser", businessName);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "register.html";
}


