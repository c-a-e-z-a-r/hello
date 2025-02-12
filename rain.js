function createRain() {
    const rain = document.createElement("div");
    rain.classList.add("rain");

    // Random position and animation duration
    rain.style.left = Math.random() * window.innerWidth + "px";
    rain.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s - 5s

    document.body.appendChild(rain);

    // Remove after falling
    setTimeout(() => {
        rain.remove();
    }, 5000);
}

// Create hearts every 500ms
setInterval(createRain, 500);