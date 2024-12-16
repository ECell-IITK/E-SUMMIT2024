gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('h1');

elements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: '100 bottom',
            end: 'center bottom',
            toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -50,
        y: 50,
        rotateY: 30,
        rotateX: 30,
        ease: "power2.inOut",
        duration: 2
    });
});
