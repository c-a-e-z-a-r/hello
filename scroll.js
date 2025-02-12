window.addEventListener("scroll", function () {
    const title = document.querySelector("h1");
    const content = document.querySelector(".content");
    const button = document.querySelector("button");
    
    if (window.scrollY > 50) {
        title.classList.add("shrink");
        content.classList.add("fade-in");
        button.classList.add("fade-in");
    } else {
        title.classList.remove("shrink");
    }
});