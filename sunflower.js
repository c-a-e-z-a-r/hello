function createSunflower() {
    const sunflower = document.createElement("div");
    sunflower.classList.add("sunflower");

    // Random position and animation duration
    sunflower.style.left = Math.random() * window.innerWidth + "px";
    sunflower.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s - 5s

    document.body.appendChild(sunflower);

    // Remove after falling
    setTimeout(() => {
        sunflower.remove();
    }, 5000);
}

// Create sunflowers every 500ms
setInterval(createSunflower, 500);