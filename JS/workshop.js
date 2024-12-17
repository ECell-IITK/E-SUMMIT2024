/* 
==========
workshops
==========
*/
const carousalCoverFirst = document.querySelector('.carousel')
const carousel = document.querySelector('.carousel-container');
const quantity = document.querySelectorAll('.items').length;
const items = document.querySelectorAll('.items')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const carousalCoverSecond = document.querySelector('.carousel-container2');


window.addEventListener('load', controlDisplay);
window.addEventListener('resize', controlDisplay);

function controlDisplay() {
    


// Check if viewport is greater than 500px
const isWideScreen = window.innerWidth > 768;

if (isWideScreen) {
    carousalCoverSecond.style.display = "none";
const indexing = (i) => {
    let idx = i % quantity;
    if (idx < 0) {
        idx = idx * -1;
    } else if (idx > 0) {
        idx = 11 - idx;
    } else {
        idx = 0;
    }
    return idx;
}

const currentSlide = (items, idx) => {
    items.forEach((link) => {
        link.classList.remove('current');
    })
    items[idx].classList.add('current')
}

let i = 0;   

// Function to rotate the carousel continuously
const rotateCarousel = () => {
    carousel.style.transition = 'transform 0.5s ease';  // Add a smooth transition for rotation
    carousel.style.transform = `rotate(${-(++i) * (360 / quantity)}deg)`;

    let index = indexing(i);
    currentSlide(items, index);
}


    // Automatic infinite rotation
    setInterval(rotateCarousel, 3000);  // Rotate every 3 seconds

    next.addEventListener('click', () => {
        rotateCarousel();
    });

    prev.addEventListener('click', () => {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `rotate(${(--i) * (360 / quantity)}deg)`;

        let index = indexing(i);
        currentSlide(items, index);
    });

    // swipe
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    // Element to detect swipe on
    const swipeArea = document.querySelector('.carousel-container');

    swipeArea.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });

    swipeArea.addEventListener("touchmove", (event) => {
        // Prevent default scrolling during swipe
        event.preventDefault();
    });

    swipeArea.addEventListener("touchend", (event) => {
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;

        const diffX = endX - startX;
        const diffY = endY - startY;

        // Determine the direction
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                console.log("Swipe Right");
                rotateCarousel();  // Manually trigger carousel rotation on swipe right
            } else {
                console.log("Swipe Left");
                carousel.style.transition = 'transform 0.5s ease';
                carousel.style.transform = `rotate(${(--i) * (360 / quantity)}deg)`;

                let index = indexing(i);
                currentSlide(items, index);
            }
        } else {
            if (diffY > 0) {
                console.log("Swipe Down");
            } else {
                console.log("Swipe Up");
            }
        }
    });
} else {
    carousalCoverFirst.style.display = "none";

}
}