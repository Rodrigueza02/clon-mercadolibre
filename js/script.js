// ==============================
// SEARCH BAR INTERACTION
// ==============================

const searchInput = document.querySelector(".search-bar input");

searchInput.addEventListener("focus", () => {
    searchInput.parentElement.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)";
});

searchInput.addEventListener("blur", () => {
    searchInput.parentElement.style.boxShadow = "none";
});


// ==============================
// PRODUCT FAVORITES
// ==============================

const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(button => {
    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if(button.classList.contains("active")){
            button.innerHTML = "❤️";
        } else {
            button.innerHTML = "🤍";
        }

    });
});


// ==============================
// ADD TO CART
// ==============================

let cartCount = 0;
const cartCounter = document.querySelector(".cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {

        cartCount++;
        cartCounter.textContent = cartCount;

        button.textContent = "Added ✔";
        button.disabled = true;

    });
});


// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// SIMPLE HERO SLIDER
// ==============================

let currentSlide = 0;

const slides = document.querySelectorAll(".hero-slide");

function showSlide(index){

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 4000);


// ==============================
// PRODUCT CARD HOVER EFFECT
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});