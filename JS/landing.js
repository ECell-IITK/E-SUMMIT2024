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

Dynamicall changing the image of the water layer

const LayerWater = document.querySelector("#Layerw");

const LayerFirst = document.querySelector("#Layer1");
const LayerSecond = document.querySelector("#Layer2");
const LayerThird = document.querySelector("#Layer3");
const RegisterL = document.getElementById("Reg_lg");
const RegisterS = document.getElementById("Reg_sm");


const timer = document.getElementById('days');
function controlVisibility() {
    if (window.innerWidth < 500) {
        LayerWater.src = "../images/2024_landing/Layerw_sm.svg";
        LayerFirst.src = "../images/2024_landing/Layer1_sm.svg";
        LayerSecond.src = "../images/2024_landing/Layer2_sm.svg";
        LayerThird.src = "../images/2024_landing/Layer3_sm.svg";
        RegisterL.classList.remove("d-none");

        

    } else if (window.innerWidth >= 500) {
        RegisterS.classList.remove("d-none");

    }
}
window.addEventListener('load', controlVisibility);
window.addEventListener('resize', controlVisibility);


// sorting the navbar icon

document.getElementById('navbar-icon-toggler').addEventListener('click', function() {
    var icon = this; 
    
    if (icon.classList.contains('bi-list')) {
        icon.classList.add('bi-x');
        icon.classList.remove('bi-list');
        icon.style.background = 'transparent'; 
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list'); 
    }
});


