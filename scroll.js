let scrollTimeout;
window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {

        console.log("Current Scroll:", window.scrollY);

        const title = document.querySelector("h1");
        const content = document.querySelector(".content");
        const button = document.querySelector("button");
        const container = document.querySelector(".container");

        if (window.scrollY > 50) {
            title.classList.add("shrink");
            content.classList.add("fade-in");
            //button.classList.add("fade-in");
            container.classList.add("shrink-container");
        } else if (window.scrollY === 0) { // Avoid unnecessary toggling
            title.classList.remove("shrink");
            content.classList.remove("fade-in");
            //button.classList.remove("fade-in");
            container.classList.remove("shrink-container");
        }
    }, 100); // 100ms delay to avoid rapid flickering
});