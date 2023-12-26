document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger-icon');
    const navContainer = document.querySelector('.nav-bar-container');
    navContainer.style.left = '-200px';

    let autoHideMenu; // Declare a variable for the auto-hide functionality

    function showNav() {
        navContainer.style.left = '20px'; // Show the sidebar
        hamburger.classList.add('active'); // Make the hamburger icon white
        // Set up the auto-hide after 5 seconds
        clearTimeout(autoHideMenu); // Clear any existing timer
        autoHideMenu = setTimeout(() => {
            hideNav();
        }, 5000);
    }

    function hideNav() {
        navContainer.style.left = '-200px'; // Hide the sidebar
        hamburger.classList.remove('active'); // Revert the hamburger icon color
    }

    function toggleNav() {
        if (navContainer.style.left === '-200px') {
            showNav();
        } else {
            hideNav();
        }
    }

    // Event listener for hamburger icon
    hamburger.addEventListener('click', toggleNav);

    // Event listener for clicking anywhere on the screen
    document.addEventListener('click', function(event) {
        // Check if the click is outside the nav container and not on the hamburger icon
        if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {
            hideNav();
        }
    }, true); // Use capture phase to ensure this runs before the bubbling phase
});
