document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

// Defining the DOM model
  const cardContainers1 = document.querySelector(".card_container1");
  const card = cardContainers1.querySelector(".cardM");



  const isWideScreen = window.innerWidth > 768;


  if (isWideScreen) {
    

    gsap.fromTo(
      card,
      {
        scale: 0.8, 
        borderRadius: "16px", 
        width: "30%",
        height: "80%",
        x: "calc(50vw - 150px)", 
        y: "calc(50vh - 100px)", 
        ease: "power1.inOut"
        
      },
      {
        scale: 1, 
        borderRadius: "0px", 
        width: "100%",
        height: "100%",
        x: "0vw",
        y: "0vh",
        scrollTrigger: {
          trigger: cardContainers1,
          scroller: "#services", 
          start: "center center",   
          end: "bottom center",   
          scrub: true,            
          pin: true,              
        }
      }
    );
  } else {
    cardContainers1.style.display = "none";



    
  }
 
});
