function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const businessName = document.getElementById("businessName").value.trim();
  const pin = document.getElementById("pin").value.trim();

  let users = getUsers();

  if (users[businessName]) {
    alert("Business already registered!");
    return;
  }

  users[businessName] = {
    pin: pin,
    trustScore: 50
  };

  saveUsers(users);

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const businessName = document.getElementById("businessName").value.trim();
  const pin = document.getElementById("pin").value.trim();

  const users = getUsers();

  if (!users[businessName]) {
    document.getElementById("error").innerText =
      "No account found. Please register.";
    return;
  }

  if (users[businessName].pin === pin) {
    localStorage.setItem("loggedInUser", businessName);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid PIN";
  }
});

document.getElementById("logoutBtn")?.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  window.location.href = "register.html";
});
