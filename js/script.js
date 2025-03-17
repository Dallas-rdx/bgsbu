
 // header mobile view
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Close the mobile menu if clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });

    // Toggle submenus in mobile view
    document.querySelectorAll("#mobile-menu .group > button").forEach(button => {
        button.addEventListener("click", function () {
            let submenu = this.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle("hidden");
            }
        });
    });
});

  
//designer secton pop-up
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





  //university gallery

  const galleryImages = [
    { src: 'images/campus_image/bg9.jpg', alt: 'Campus View', caption: 'Campus View' },
    { src: 'images/campus_image/bg8.jpeg', alt: 'Campus View', caption: 'Campus View' },
    { src: 'images/campus_image/ground.jpg', alt: 'Sports Ground', caption: 'Sports Ground' },
    { src: 'images/campus_image/library1.jpg', alt: 'Library', caption: 'Library' },
    { src: 'images/campus_image/MBA dept.jpg', alt: 'MBA Department', caption: 'MBA Department' },
    { src: 'images/campus_image/Auditorium2.jpg', alt: 'Auditorium', caption: 'Auditorium' },
    { src: 'images/campus_image/apj_hostal.png', alt: 'Hostal', caption: 'Hostal' },
    { src: 'images/campus_image/labs.jpg', alt: 'Computer Labs', caption: 'Computer Labs' },
    { src: 'images/campus_image/health centre.jpg', alt: 'Health Centre', caption: 'Health Centre' },
    { src: 'images/campus_image/campus bus.jpeg', alt: 'Campus Buses', caption: 'Campus Buses' },
    { src: 'images/campus_image/foundation day.jpg', alt: 'Foundation Day', caption: 'Foundation Day' },
    { src: 'images/campus_image/cultural festival.jpeg', alt: 'Cultural Festival', caption: 'Cultural Festival' },
    { src: 'images/campus_image/classrooms.jpg', alt: 'Classrooms', caption: 'Classrooms' },
    { src: 'images/campus_image/Campus Entrance.jpg', alt: 'Campus Entrance', caption: 'Campus Entrance' },
    { src: 'images/campus_image/nursing autistic pride day.jpg', alt: 'Nursing Autistic Pride Day', caption: 'Nursing Autistic Pride Day' },
    { src: 'images/campus_image/sports1.jpg', alt: 'Football Tournament', caption: 'Football Tournament' },
    { src: 'images/campus_image/sports3.webp', alt: 'Sports Day', caption: 'Sports Day' },
    { src: 'images/campus_image/polytech.jpg', alt: 'Polytechnic', caption: 'Polytechnic' },
    { src: 'images/campus_image/bg7.webp', alt: 'Girls Hostals', caption: 'Girls Hostals' },
    { src: 'images/campus_image/bg6.jpg', alt: 'Campus View', caption: 'Campus View' },
    { src: 'images/campus_image/bg5.jpeg', alt: 'Sabrang', caption: 'Sabrang' },
    { src: 'images/campus_image/bg4.jpeg', alt: 'View Point', caption: 'View Point' },
    { src: 'images/campus_image/bg2.jpg', alt: 'Campus view', caption: 'Campus view' },
    { src: 'images/campus_image/bg1.jpg', alt: 'Boys Hostal', caption: 'Boys Hostal' },
];

const galleryThumbnails = document.getElementById('galleryThumbnails');

galleryImages.forEach(image => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail', 'relative', 'overflow-hidden', 'group', 'cursor-pointer');
    thumbnail.innerHTML = `
        <img src="${image.src}" alt="${image.alt} Thumbnail" class="w-full h-32 object-cover transition-transform duration-300 transform group-hover:scale-105">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p class="text-white font-semibold text-sm md:text-lg">${image.caption}</p>
        </div>
    `;
    thumbnail.addEventListener('click', () => openLightbox(image.src, image.caption));
    galleryThumbnails.appendChild(thumbnail);
});

function openLightbox(src, caption) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxCaption').textContent = caption;
    document.getElementById('lightbox').classList.remove('hidden');
}

document.getElementById('lightbox').addEventListener('click', function (event) {
    if (event.target === this) {
        this.classList.add('hidden');
    }
});



//news scrolling
function startMarquee() {
  const marquee = document.getElementById("marquee");
  const clone = marquee.cloneNode(true);
  marquee.parentElement.appendChild(clone); // Duplicate for seamless effect

  let speed = 2; // Adjust speed
  let pos = 0;

  function move() {
    pos -= speed;
    if (pos <= -marquee.scrollWidth) {
      pos = 0; // Reset position when fully scrolled
    }
    marquee.style.transform = `translateX(${pos}px)`;
    clone.style.transform = `translateX(${pos + marquee.scrollWidth}px)`;
    requestAnimationFrame(move);
  }

  move();
}

window.onload = startMarquee;