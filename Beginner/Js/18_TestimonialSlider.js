const testimonials = [
    {
        name: "Constantine V",
        text: "Thank you for making it painless and pleasant. The very best.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sophia M",
        text: "I couldn't have asked for more than this. Absolutely wonderful!",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "James L",
        text: "It's exactly what I've been looking for. You guys rock!",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

const testimonial_card = document.querySelector(".testimonial-card");
let currentIndex = 0;

function updateTestimonial(){
    const {name,text,image} = testimonials[currentIndex];
    document.querySelector(".profile-img").src = image;
    document.querySelector(".testimonial-text").textContent = text; 
    document.querySelector(".author").textContent = name;
    currentIndex ++;
    if (currentIndex >= testimonials.length)
        currentIndex = 0;

}

setInterval(updateTestimonial, 2000);

updateTestimonial();