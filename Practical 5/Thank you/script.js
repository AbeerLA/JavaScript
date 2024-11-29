// Simulating the selection value (you can connect this to your rating logic)
document.addEventListener("DOMContentLoaded", () => {
    const selectedRating = 4; // Example rating value
    const ratingElement = document.querySelector(".thank-you__rating");
    ratingElement.textContent = `You selected ${selectedRating} out of 5`;
});
