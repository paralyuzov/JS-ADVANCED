function notify(message) {
  const divNotification = document.getElementById("notification");
  divNotification.style.display = "block";
  divNotification.textContent = message;
  divNotification.addEventListener("click", hide);

  function hide(e) {

    e.target.style.display = "none";

  }
}