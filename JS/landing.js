// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)

//     gsap.set('#landing_page', {
//         clipPath: 'polygon(14% 0%, 80% 0%, 95% 85%, 2% 100%)',
//         borderRadius : '0 0 40% 10%'
//     })

//     gsap.from('#landing_page', {
//         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         borderRadius: '0 0 0 0',
//         ease : 'power1.inOut',
//         markers :'true',
//         scrollTrigger : {
//             trigger: '#landing_page',
//             start: 'center center',
//             end: 'bottom center',
//             scrub: 'true'

//         }
//     })
//     });

// Dynamicall changing the image of the water layer

const responsiveImage = document.querySelector("#Layerw");
const timer = document.getElementById('days');
function updateImageSource() {
    if (window.innerWidth < 500) {
        responsiveImage.src = "../images/2024_landing/Layerw_sm.svg";
        timer.style.display = "none";

    } else {
        responsiveImage.src = "../images/2024_landing/Layerw.svg"; 
        // timer.style.display = "block";

    }
}
updateImageSource()