document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "check-email.html";
});

document
  .getElementById("backToLogin")
  .addEventListener("click", function () {
    alert("Go back to login page here.");
  });
