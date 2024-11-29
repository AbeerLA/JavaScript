// Select all rating buttons and the submit button
const buttons = document.querySelectorAll('.rating__button');
const submitButton = document.querySelector('.rating__submit');

// Variable to store the selected rating value
let selectedRating = null;

// Add click event listeners to all rating buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active state from all buttons
        buttons.forEach(btn => btn.classList.remove('rating__button--active'));
        // Add the active state to the clicked button
        button.classList.add('rating__button--active');
        // Store the selected rating value
        selectedRating = button.getAttribute('data-value');
    });
});

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {
    // Check if a rating was selected
    if (selectedRating) {
        alert(`You selected ${selectedRating} out of 5!`);
    } else {
        alert('Please select a rating before submitting.');
    }
});
