function createSad() {
    const sad = document.createElement("div");
    sad.classList.add("sad");

    // Random position and animation duration
    sad.style.left = Math.random() * window.innerWidth + "px";
    sad.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s - 5s

    document.body.appendChild(sad);

    // Remove after falling
    setTimeout(() => {
        sad.remove();
    }, 5000);
}

// Create sad every 500ms
setInterval(createSad, 500);