const stars = document.querySelectorAll(".stars span");
const emoji = document.querySelector(".emoji");

const emojis = ["😡", "😠", "😐", "😊", "😍"]; 

stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => updateStars(index + 1));
    star.addEventListener("click", () => {
        selectedRating = index + 1;
        updateEmoji(selectedRating);
    });
    star.addEventListener("mouseleave", () => updateStars(selectedRating));
});

function updateStars(rating) {
    stars.forEach((star, index) => {
        star.classList.toggle("active", index < rating);
    });
}

function updateEmoji(rating) {
    emoji.textContent = emojis[rating - 1];
}

updateStars(selectedRating);