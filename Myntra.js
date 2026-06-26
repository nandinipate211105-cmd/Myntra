// Search bar focus effect
const searchInput = document.querySelector(".search");

searchInput.addEventListener("focus", () => {
    searchInput.style.backgroundColor = "#ffffff";
    searchInput.style.border = "1px solid #ff3f6c";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.backgroundColor = "#f5f5f6";
    searchInput.style.border = "1px solid #ddd";
});


// Menu hover effect
const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.color = "#ff3f6c";
    });

    item.addEventListener("mouseleave", () => {
        item.style.color = "#000";
    });
});


// Profile, Wishlist, Bag click actions
document.querySelector(".profile").addEventListener("click", () => {
    alert("Login / Signup feature coming soon!");
});

document.querySelector(".wishlist").addEventListener("click", () => {
    alert("Your Wishlist is empty!");
});

document.querySelector(".bag").addEventListener("click", () => {
    alert("Your Shopping Bag is empty!");
});


// Sticky header shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    }
});


// Banner auto scroll (simple slider effect)
let banners = document.querySelectorAll(".homeImg");
let index = 0;

setInterval(() => {
    banners.forEach(img => img.style.display = "none");
    banners[index].style.display = "block";
    index = (index + 1) % banners.length;
}, 3000);
