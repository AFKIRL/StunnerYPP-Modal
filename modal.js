//Get Element ID's
var modal = document.getElementById("modal");
var cancelButton = document.getElementById("cancel-button");

var yesButton = document.getElementById("yes-button");
var noButton = document.getElementById("no-button");

var cancelText = document.getElementById("cancel-button");


//Show Modal Event
cancelButton.addEventListener("click", function () {
    modal.style.display = "block";
  });
//Hide Modal Event
noButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  yesButton.addEventListener("click", function () {
    // Update modal content
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "<p>Subscription successfully cancelled!</p>";
  
    // Hide modal after 2 seconds
    setTimeout(function () {
      modal.style.display = "none";
    }, 2000);
  
    // Update cancel button on page
    cancelText.innerHTML = "Cancelled";
  });