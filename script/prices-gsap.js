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
        .from('.membership', {
            stagger: 0.3,
            duration: 0.5,
            opacity: 0,
            y: '50px'
        })
})

gsap.from('.join', {
    scrollTrigger: '.membership',
    duration: 1,
    opacity: 0,
})