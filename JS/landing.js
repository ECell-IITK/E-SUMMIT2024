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

// const LayerWater = document.querySelector("#Layerw");

// const LayerFirst = document.querySelector("#Layer1");
// const LayerSecond = document.querySelector("#Layer2");
// const LayerThird = document.querySelector("#Layer3");
// const RegisterL = document.getElementById("Reg_lg");
// const RegisterS = document.getElementById("Reg_sm");


// const timer = document.getElementById('days');
// function controlVisibility() {
//     if (window.innerWidth < 500) {
//         LayerWater.src = "../images/2024_landing/Layerw_sm.svg";
//         LayerFirst.src = "../images/2024_landing/Layer1_sm.svg";
//         LayerSecond.src = "../images/2024_landing/Layer2_sm.svg";
//         LayerThird.src = "../images/2024_landing/Layer3_sm.svg";
//         RegisterL.classList.remove("d-none");

        

//     } else if (window.innerWidth >= 500) {
//         RegisterS.classList.remove("d-none");

//     }
// }
// window.addEventListener('load', controlVisibility);
// window.addEventListener('resize', controlVisibility);


// // sorting the navbar icon

// document.getElementById('navbar-icon-toggler').addEventListener('click', function() {
//     var icon = this; 
    
//     if (icon.classList.contains('bi-list')) {
//         icon.classList.add('bi-x');
//         icon.classList.remove('bi-list');
//         icon.style.background = 'transparent'; 
//     } else {
//         icon.classList.remove('bi-x');
//         icon.classList.add('bi-list'); 
//     }
// });



// Optimise the code
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations with ScrollTrigger
    // if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    //     gsap.registerPlugin(ScrollTrigger);

    //     ScrollTrigger.matchMedia({
    //         "(min-width: 500px)": function() {
    //             gsap.set('#landing_page', {
    //                 clipPath: 'polygon(14% 0%, 80% 0%, 95% 85%, 2% 100%)',
    //                 borderRadius: '0 0 40% 10%'
    //             });

    //             gsap.from('#landing_page', {
    //                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //                 borderRadius: '0 0 0 0',
    //                 ease: 'power1.inOut',
    //                 scrollTrigger: {
    //                     trigger: '#landing_page',
    //                     start: 'center center',
    //                     end: 'bottom center',
    //                     scrub: true
    //                 }
    //             });
    //         }
    //     });
    // }

    // Dynamic Image Source and Registration Button Visibility
    const LayerWater = document.querySelector("#Layerw");
    const LayerFirst = document.querySelector("#Layer1");
    const LayerSecond = document.querySelector("#Layer2");
    const LayerThird = document.querySelector("#Layer3");
    const RegisterL = document.getElementById("Reg_lg");
    const RegisterS = document.getElementById("Reg_sm");

    function updateLayers(isSmallScreen) {
        if (LayerWater) LayerWater.src = isSmallScreen ? "../images/2024_landing/Layerw_sm.svg" : "../images/2024_landing/Layerw.svg";
        if (LayerFirst) LayerFirst.src = isSmallScreen ? "../images/2024_landing/Layer1_sm.svg" : "../images/2024_landing/Layer1.svg";
        if (LayerSecond) LayerSecond.src = isSmallScreen ? "../images/2024_landing/Layer2_sm.svg" : "../images/2024_landing/Layer2.svg";
        if (LayerThird) LayerThird.src = isSmallScreen ? "../images/2024_landing/Layer3_sm.svg" : "../images/2024_landing/Layer3.svg";
    }

    function controlVisibility() {
        const isSmallScreen = window.innerWidth < 500;
        updateLayers(isSmallScreen);
        if (RegisterL) RegisterL.classList.toggle("d-none", !isSmallScreen);
        if (RegisterS) RegisterS.classList.toggle("d-none", isSmallScreen);
    }

    window.addEventListener('load', controlVisibility);
    window.addEventListener('resize', debounce(controlVisibility, 100));

    // Navbar Icon Toggle
    const navbarIconToggler = document.getElementById('navbar-icon-toggler');
    if (navbarIconToggler) {
        navbarIconToggler.addEventListener('click', function() {
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
            this.style.background = 'transparent';
        });
    }
});

// Debounce Function to Limit Function Execution
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
