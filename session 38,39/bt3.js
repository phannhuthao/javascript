document.addEventListener('DOMContentLoaded', function() {
    // Select the image container
    const imageContainer = document.querySelector('.container');

    // Wait for the page to load before revealing the image
    window.onload = function() {
        // Show the image container (remove opacity)
        imageContainer.style.opacity = '1';
    };
});
