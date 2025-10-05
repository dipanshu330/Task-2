const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

right.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlider();
});

left.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlider();
});


let ratings = Array(slides.length).fill(0);
const allStarsGroups = document.querySelectorAll('.stars');

allStarsGroups.forEach((group, index) => {
    const stars = group.querySelectorAll('.star');
    const text = slides[index].querySelector('.text');

    stars.forEach((star, i) => {
        star.addEventListener('mouseover', () => updateStars(stars, i + 1));
        star.addEventListener('mouseout', () => updateStars(stars, ratings[index]));
        star.addEventListener('click', () => {
            if (ratings[index] === i + 1) {
                ratings[index] = 0;
                text.textContent = "Select rating";
            } else {
                ratings[index] = i + 1;
                text.textContent = `You rated ${ratings[index]} star${ratings[index] > 1 ? 's' : ''}`;
            }
            updateStars(stars, ratings[index]);
        });
    });
});

function updateStars(stars, rating) {
    stars.forEach((star, i) => {
        star.classList.toggle('active', i < rating);
    });
}
