console.log("Main JavaScript");

// fetch("../public/data/properties.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error("Error fetching JSON:", error));





  

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark-mode");
  } else {
    localStorage.setItem("mode", "light-mode");
  }
}

// Save the theme
if (localStorage.getItem("mode") === "dark-mode") {
  document.body.classList.add("dark-mode");
}






// navbar scrolled
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-content");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//Detail
var swiper = new Swiper(".mySwiper", {
loop: true,
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
loop: true,
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
thumbs: {
    swiper: swiper,
},
});
