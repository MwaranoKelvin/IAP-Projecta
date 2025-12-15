document
  .getElementById("newPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const pwd = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (pwd !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Frontend only; normally you would send to backend
    window.location.href = "secure-password-reset-1.html";
  });

document.getElementById("backLink").addEventListener("click", function () {
  alert("Go back to login page here.");
});
