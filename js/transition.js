// script.js
barba.init({
    transitions: [{
        name: 'slide',
        async leave(data) {
            const done = this.async();
            await gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
            done();
        },
        async enter(data) {
            await gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
        },
    }],
});
