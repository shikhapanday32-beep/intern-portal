function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const referral = document.getElementById("referral").value;
  const donation = document.getElementById("donation").value;

  localStorage.setItem("username", username);
  localStorage.setItem("referral", referral);
  localStorage.setItem("donation", donation);

  window.location.href = "dashboard.html";
}