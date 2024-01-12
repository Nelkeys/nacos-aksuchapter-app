document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading process
    let percentageElement = document.getElementById("percentage");
    let contentElement = document.querySelector(".content");
  
    let percentage = 0;
    let interval = setInterval(function () {
      percentageElement.innerText = `${percentage}%`;
      percentage++;
  
      if (percentage > 100) {
        clearInterval(interval);
        // Hide loader and show content
        document.querySelector(".loader-container").style.display = "none";
        contentElement.style.display = "block";
      }
    }, 10);
});
  

  function reloadHomePage() {
      window.location.reload();
}