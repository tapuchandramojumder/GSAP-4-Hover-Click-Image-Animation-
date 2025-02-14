
let tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.21,
});

tl.from("#text-section h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.4,
});

tl.from(".hover-img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.4,
    onComplete: () => {
        addHoverEffect();
        addClickEffect();
    }
});

function addHoverEffect() {
    const images = document.querySelectorAll(".hover-img");
    const container = document.getElementById("image-container");

    container.addEventListener("mouseenter", () => {
        gsap.to(images, {
            x: (i) => Math.cos((i / images.length) * Math.PI * 2) * 150,
            y: (i) => Math.sin((i / images.length) * Math.PI * 2) * 150,
            rotate: 0,
            scale: 1.5,
            borderRadius: "50%",
            duration: 0.5,
            ease: "power2.out"
        });
    });

    container.addEventListener("mouseleave", () => {
        gsap.to(images, {
            x: 0,
            y: 0,
            rotate: (i) => [20, 14, 8, 2][i],
            scale: 1,
            borderRadius: "0%",
            duration: 0.5,
            ease: "power2.inOut"
        });
    });
}

function addClickEffect() {
    const images = document.querySelectorAll(".hover-img");

    images.forEach((img, index) => {
        img.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent resetting when clicking the image itself

            gsap.to(images, {
                scale: 1,
                opacity: 0.5,
                zIndex: 1,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.to(img, {
                scale: 2,
                opacity: 1,
                zIndex: 10,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("hover-img")) {
            gsap.to(images, {
                scale: 1,
                opacity: 1,
                zIndex: 1,
                duration: 0.5,
                ease: "power2.inOut"
            });
        }
    });
}
