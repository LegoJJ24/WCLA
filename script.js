const bulletTrack = document.getElementById('dynamic-bullets');

// Pause the scrolling animation when the user hovers over it
bulletTrack.addEventListener('mouseenter', () => {
    bulletTrack.style.animationPlayState = 'paused';
});

bulletTrack.addEventListener('mouseleave', () => {
    bulletTrack.style.animationPlayState = 'running';
});
