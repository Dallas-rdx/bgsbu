// Select elements from the DOM
const gallerySlider = document.getElementById('gallerySlider');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

let currentIndex = 0; // Tracks the current index of the visible items

// Function to determine how many items should be displayed based on screen width
function getItemsPerView() {
    if (window.innerWidth < 640) {
        return 1; // Show 1 image on mobile
    } else if (window.innerWidth < 1024) {
        return 2; // Show 2 images on tablets
    } else {
        return 3; // Show 3 images on desktop
    }
}

// Function to update which items are visible
function showItems() {
    const itemsPerView = getItemsPerView(); // Get the number of items per view

    // Loop through all gallery items
    galleryItems.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsPerView) {
            item.style.display = "block"; // Show item
        } else {
            item.style.display = "none"; // Hide item
        }
    });
}

// Button Navigation: Moves the gallery left
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; // Ensure index loops correctly
    showItems(); // Update visible items
});

// Button Navigation: Moves the gallery right
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showItems();
});

// Lightbox Feature: Opens full-size image when clicking a gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImg.src = item.querySelector('img').src; // Set lightbox image source
        lightbox.classList.remove('hidden'); // Show lightbox
    });
});

// Closes lightbox when clicking anywhere on the background
lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden'); // Hide lightbox
});

// Touch Support for Mobile Swipe Navigation
let touchStartX = 0;
let touchEndX = 0;

// Detect touch start position
gallerySlider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

// Detect touch end position and determine swipe direction
gallerySlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

// Function to handle swipe gestures
function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Swipe Left (Next Image)
        currentIndex = (currentIndex + 1) % galleryItems.length;
    } else if (touchEndX - touchStartX > 50) {
        // Swipe Right (Previous Image)
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    showItems();
}

// Initialize the gallery by showing the correct number of images
showItems();

// Adjust items per view when the window resizes
window.addEventListener('resize', showItems);


// -------------------------
//  Mobile Marquee Ticker
// -------------------------
document.addEventListener("DOMContentLoaded", function () {
    const ticker = document.querySelector(".marquee"); // Select the ticker element
    let tickerWidth = ticker.scrollWidth; // Get the width of the marquee content

    // Function to move the ticker from right to left
    function moveTicker() {
        ticker.style.transform = "translateX(100%)"; // Start off-screen
        setTimeout(() => {
            ticker.style.transition = "transform 20s linear"; // Apply animation speed
            ticker.style.transform = `translateX(-${tickerWidth}px)`; // Move it to the left
        }, 100);
    }

    // When animation completes, restart the ticker
    ticker.addEventListener("transitionend", () => {
        ticker.style.transition = "none"; // Remove transition effect
        moveTicker(); // Restart animation
    });

    moveTicker(); // Start the ticker when page loads
});


// -------------------------
//  Mobile Menu Toggle
// -------------------------

// Open/close mobile menu when the toggle button is clicked
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden'); // Show/hide menu
});

// -------------------------
//  Accordion Feature for Mobile
// -------------------------

// Select all buttons inside an expandable group
document.querySelectorAll('.group > button').forEach(button => {
    button.addEventListener('click', function () {
        // Hide all other open sections except the one clicked
        document.querySelectorAll('.group > div').forEach(div => {
            if (div !== this.nextElementSibling) {
                div.classList.add('hidden');
            }
        });

        // Toggle the clicked section's visibility
        this.nextElementSibling.classList.toggle('hidden');
    });
});






  const designerBtn = document.getElementById('designer-btn');
  const popup = document.getElementById('designer-popup');
  const closePopup = document.getElementById('close-popup');

  designerBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
    }
  });
