document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    initFish();
});

function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

function initFish() {
    const fishContainer = document.getElementById('fish-container');
    const fishTypes = ['🐟'];
    const numFish = 10;

    function createFish() {
        const fish = document.createElement('div');
        fish.className = 'fish';
        fish.textContent = fishTypes[Math.floor(Math.random() * fishTypes.length)];
        fish.style.left = `${Math.random() * 100}vw`;
        fish.style.top = `${Math.random() * 100}vh`;
        fishContainer.appendChild(fish);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;

        function animateFish() {
            x += dx;
            y += dy;

            if (x < -50) x = window.innerWidth + 50;
            if (x > window.innerWidth + 50) x = -50;
            if (y < 0 || y > window.innerHeight) dy = -dy;

            fish.style.left = `${x}px`;
            fish.style.top = `${y}px`;

            fish.style.transform = `scaleX(${dx > 0 ? -1 : 1})`;

            requestAnimationFrame(animateFish);
        }

        animateFish();
    }

    for (let i = 0; i < numFish; i++) {
        createFish();
    }
}
