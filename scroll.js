window.addEventListener("scroll", function () {
    const title = document.querySelector("h1");
    const content = document.querySelector(".content");
    const button = document.querySelector("button");
    const container = document.querySelector(".container");

    if (window.scrollY > 50) {
        title.classList.add("shrink");
        content.classList.add("fade-in");
        button.classList.add("fade-in");
        container.classList.add("shrink-container");
    } else {
        title.classList.remove("shrink");
        content.classList.remove("fade-in");
        button.classList.remove("fade-in");
        container.classList.remove("shrink-container");
    }
});