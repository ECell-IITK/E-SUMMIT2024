document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const cardContainers = document.querySelector(".card_container");
    const card = cardContainers.querySelector(".cardM");

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
          trigger: cardContainers,
          scroller: "#services", 
          start: "center center",   
          end: "bottom center",   
          scrub: true,            
          pin: true,              
        }
      }
    );
});
