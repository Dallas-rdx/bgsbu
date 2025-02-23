
  
  
  // Hide dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchResults.contains(e.target) && !searchInput.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  });

  
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Mobile dropdown functionality
document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('hidden');
        this.querySelector('i').classList.toggle('fa-chevron-up');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.group') && !e.target.closest('.mobile-dropdown-toggle')) {
        // Close desktop dropdowns
        document.querySelectorAll('.group ul').forEach(dropdown => {
            dropdown.classList.add('hidden');
        });
        
        // Close mobile dropdowns
        document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
            dropdown.classList.add('hidden');
        });
        
        // Reset mobile chevrons
        document.querySelectorAll('.mobile-dropdown-toggle i').forEach(icon => {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        });
    }
});

// Desktop hover functionality
document.querySelectorAll('.group').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('ul').classList.remove('hidden');
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('ul').classList.add('hidden');
    });
});


  // JavaScript for Click-to-Toggle Dropdowns -->
  
    document.addEventListener('DOMContentLoaded', function () {
      const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function (e) {
          e.preventDefault(); 
          const dropdownMenu = this.nextElementSibling; 
          document.querySelectorAll('.dropdown-menu').forEach((menu) => {
            if (menu !== dropdownMenu) {
              menu.classList.add('hidden');
            }
          });
          dropdownMenu.classList.toggle('hidden');
        });
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
          document.querySelectorAll('.dropdown-menu').forEach((menu) => {
            menu.classList.add('hidden');
          });
        }
      });
    });
  
    // Mobile Menu Toggle Script //

    document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('mobile-menu').classList.toggle('hidden');
  });

 