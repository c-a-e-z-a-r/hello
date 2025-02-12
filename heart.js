function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random position and animation duration
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s - 5s

    document.body.appendChild(heart);

    // Remove after falling
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 500ms
setInterval(createHeart, 500);