// Our facilities Page ------------------
// Header
window.addEventListener('load', () => {
    const timeline = gsap.timeline()
    timeline
        .to('.main-title', {
            duration: 1,
            x: '0',
            ease: "sine.in",
        })
        .to('.title-area h3', {
            duration: 1,
            x: '0',
            ease: "sine.in",
        })
        .to('.button-area', {
            delay: 0.5,
            duration: 1,
            opacity: 1,
        })
        .to('.highlight', {
            duration: 1,
            color: '#e65f21'
        })
})
// Gym description
gsap.from('.gym-description', {
    scrollTrigger: '.facilities-trigger',
    duration: 1,
    opacity: 0,
    y: '50px'
})

gsap.from('.facility-features ul li', {
    scrollTrigger: '.facilities-header',
    stagger: 0.1,
    delay: 1,
    duration: 0.7,
    opacity: 0,
    y: '50px'
})

// Image area
gsap.from('.gallery-buttons', {
    scrollTrigger: '.gallery-buttons',
    duration: 1,
    opacity: 0,
    y: '50px'
})

gsap.from('.gallery img', {
    scrollTrigger: '.gallery-buttons',
    duration: 1,
    opacity: 0,
    y: '50px'
})

// Join us banner

gsap.from('.banner-title', {
    duration: 1,
    opacity: 0,
    y: '50px'
})
gsap.to(' .highlight-1', {
    delay: 1.3,
    duration: 1,
    color: '#e65f21',
})
gsap.from('.join', {
    duration: 1,
    opacity: 0,
})

// Contact us animation
gsap.from('.contact-info h3', {
    duration: 1,
    opacity: 0,
    x: '-100vh'
})

gsap.from('.connect-us h3', {
    duration: 1,
    opacity: 0,
    x: '100vh'
})

gsap.from('.method', {
    stagger: 0.3,
    delay: 1,
    duration: 0.7,
    opacity: 0,
    y: '50px'
})

gsap.from('.fab', {
    stagger: 0.3,
    delay: 1,
    duration: 0.7,
    opacity: 0,
    y: '50px'
})

// Footer animation

gsap.from('footer', {
    stagger: 0.3,
    delay: 2.3,
    duration: 0.7,
    opacity: 0,
})
