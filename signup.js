const signupForm = document.getElementById("signupForm");
const signupSuccess = document.getElementById("signupSuccess");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  const phone = document.getElementById("phone").value;

  // Simulate phone verification
  const code = prompt("Enter the 4-digit code sent to " + phone + ":");
  if (code !== "1234") {
    alert("Invalid code!");
    return;
  }

  const userData = {
    username: username,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  signupSuccess.style.display = "block";
});