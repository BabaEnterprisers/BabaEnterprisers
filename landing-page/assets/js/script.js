// TOGGLE MENU
const headerMenu = document.querySelector(".header__menu"),
  menuBtn = document.querySelector(".menu-btn"),
  headerMenuItems = headerMenu.querySelectorAll("li a");
menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
  });
});

// ADD FIXED HEADER
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});


// Form for contact us




// slider crousel
let currentSlide = 1;
let autoSlideInterval;

// Initialize the slideshow
showSlide(currentSlide);

// Start automatic slideshow
startAutoSlide();

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    controller(1);
  }, 5000); // Adjust the interval (in milliseconds) as needed
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function changeSlide(n) {
  stopAutoSlide();
  showSlide(currentSlide += n);
}

function controller(x) {
  stopAutoSlide();
  currentSlide += x;
  showSlide(currentSlide);
}

function showSlide(num) {
  let slides = document.getElementsByClassName("slide");
  let dotsContainer = document.querySelector(".carousel-dots");

  if (num > slides.length) {
    currentSlide = 1;
  }

  if (num < 1) {
    currentSlide = slides.length;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[currentSlide - 1].style.display = "block";

  // Update dots
  dotsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    dotsContainer.innerHTML += `<span class="dot" onclick="currentSlide=${i + 1}; showSlide(currentSlide)"></span>`;
  }

  // Highlight the active dot
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[currentSlide - 1].classList.add("active");

  // Restart automatic slideshow after manual interaction
  startAutoSlide();
}
