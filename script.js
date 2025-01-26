// Function to open the scroll
function openScroll() {
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.style.display = 'flex'; // Show the scroll container
}

// Optional: Close the scroll on clicking outside
document.addEventListener('click', (event) => {
    const scrollContainer = document.getElementById('scroll-container');
    const isScrollBackground = scrollContainer.contains(event.target);
    const isButton = event.target.classList.contains('deep-press-btn');
    
    if (!isScrollBackground && !isButton) {
        scrollContainer.style.display = 'none';
    }
});
