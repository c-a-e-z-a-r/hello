document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    let clickCount = -1;

    const colors = [
        "rgb(255, 192, 203)", "rgb(245, 182, 193)", "rgb(235, 172, 183)", 
        "rgb(225, 162, 173)", "rgb(215, 152, 163)", "rgb(205, 142, 153)", 
        "rgb(195, 132, 143)", "rgb(185, 122, 133)", "rgb(175, 115, 126)", 
        "rgb(165, 110, 120)", "rgb(155, 105, 115)", "rgb(145, 100, 110)", 
        "rgb(135, 95, 105)", "rgb(125, 90, 100)", "rgb(120, 88, 98)", 
        "rgb(115, 85, 95)", "rgb(112, 82, 92)", "rgb(110, 80, 90)", 
        "rgb(100, 78, 88)", "rgb(98, 75, 86)"
    ];

    const buttonTexts = [
        "Are you sure?", "Really?", "Sure ka baby?", "baby naman eee", "seryosoo? :<",
        "Hmmm...", "Please reconsider!", "Wait!", "Don't do this!", "babyyyyyy",
        "Stop!", "You sure you wanna say no?", "Click yes please", "babyy pleaaaseeeeeeee",
        "Noooo!", "Ackkkkkkk!!", "malulungkot ako...", "huhuhuhuhuhu", 
        "......", ":<"
    ];

    let sunflowerChanged = false; // Track emoji state
    let heartChanged = false;

    if (noButton) {
        noButton.style.transition = "opacity 0.8s ease-in-out"; // Smooth fading

        noButton.addEventListener("click", function () {
            clickCount++;

            if (clickCount < colors.length) {
                document.body.style.backgroundColor = colors[clickCount];
                noButton.textContent = buttonTexts[clickCount]; // Change button text
            }
            

            // 🎭 Smooth fade-out from click 20 to 30
            if (clickCount >= 20) {
                let fadeAmount = Math.max(0, (30 - clickCount) / 10); // Gradual fade (1 → 0)
                noButton.style.opacity = fadeAmount;
            }
        });
    }
});
