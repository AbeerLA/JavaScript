const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");

let selectedRating = null;

// Add event listeners to each rating button
ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove "active" class from all buttons
        ratingButtons.forEach((btn) => btn.classList.remove("active"));

        // Add "active" class to the clicked button
        button.classList.add("active");

        // Save the selected rating value
        selectedRating = button.getAttribute("data-value");
    });
});

// Add event listener to the submit button
submitButton.addEventListener("click", () => {
    if (selectedRating) {
        alert(`You rated us: ${selectedRating}`);
    } else {
        alert("Please select a rating before submitting!");
    }
});
