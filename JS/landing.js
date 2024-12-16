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

const LayerWater = document.querySelector("#Layerw");

const LayerFirst = document.querySelector("#Layer1");
const LayerSecond = document.querySelector("#Layer2");
const LayerThird = document.querySelector("#Layer3");



const timer = document.getElementById('days');
function updateImageSource() {
    if (window.innerWidth < 500) {
        LayerWater.src = "../images/2024_landing/Layerw_sm.svg";
        // LayerWater.style.border = "1px solid blue";
        LayerFirst.src = "../images/2024_landing/Layer1_sm.svg";
        LayerSecond.src = "../images/2024_landing/Layer2_sm.svg";
        LayerThird.src = "../images/2024_landing/Layer3_sm.svg";
        

    } else {
        responsiveImage.src = "../images/2024_landing/Layerw.svg"; 

    }
}
updateImageSource()