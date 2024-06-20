const ti = gsap.timeline()

.from(".nav, .nav .logo, .nav .title, .nav .notify", {
    opacity: 0,
    // delay: -1,
    y: -100,
    duration: 1.5,
    stagger: 0.2,
})

.from("li", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    stagger: 0.2,
})