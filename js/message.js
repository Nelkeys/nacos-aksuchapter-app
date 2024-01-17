
function submitForm() {
    // Prevent the default form submission
event.preventDefault();

// Get the form data
const formData = new FormData(document.getElementById("feedbackForm"));

// Send the form data to Formspree using Fetch API
fetch("https://formspree.io/f/xkndgnaj", {
    method: "POST",
    body: formData,
    headers: {
        Accept: "application/json",
    },
})
.then(response => response.json())
.then(data => {
    // Handle the response data as needed

    // After processing, you can hide the form or take other actions
    hideMessagePopup();
    window.location.reload();
})
.catch(error => {
    console.error("Error submitting the form:", error);
    alert("Feedback not sent! Check network connection and try again");
});
}


function showMessagePopup() {
    document.querySelector(".popup-container").style.display = "flex";
}
function hideMessagePopup() {
    document.querySelector(".popup-container").style.display = "none";
}

