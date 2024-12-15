document.addEventListener("DOMContentLoaded", () => {
    const landingPage = document.querySelector("#landing_page");
    const scrollSlide = document.querySelector("#scroll-slide");
    const images_section = document.querySelector(".images-section");

    scrollSlide.style.perspective = "2000px";

    window.addEventListener("scroll", () => {
        const rect = landingPage.getBoundingClientRect();

        const viewportHeight = window.innerHeight;
        console.log(viewportHeight);
        const elementBottom = rect.bottom - 100;
        console.log(elementBottom);

        // Check if the bottom of the landing page is within the viewport
        if (elementBottom < viewportHeight && elementBottom > 0) {
            // Calculate rotation based on the scroll position
            const progress = 1 - elementBottom / viewportHeight; // Normalize scroll progress (0 to 1)
            const rotationX = 20 * progress; // Maximum tilt of 20 degrees

            // Apply transformations
            landingPage.style.transform = `rotateX(${rotationX}deg)`;
            landingPage.style.transformOrigin = "center bottom";

        } else {
            // Reset transformations when out of range
            landingPage.style.transform = "rotateX(0deg)";
            landingPage.style.transformOrigin = "center bottom"; // Ensuring transform origin is always set
        }
    });
});
