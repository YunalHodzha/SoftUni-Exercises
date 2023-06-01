function notify(message) {
  const hiddenDiv = document.getElementById("notification");
  hiddenDiv.style.display = "block";
  hiddenDiv.textContent = message;
 
  hiddenDiv.addEventListener("click", hideDiv)

  function hideDiv() {
    hiddenDiv.style.display = "none";
  }
}