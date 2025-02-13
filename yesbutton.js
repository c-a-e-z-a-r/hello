document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.querySelector(".button1 button"); // Select the "YES" button
    const button1Div = document.querySelector(".button1"); // Div containing YES button
    const button2Div = document.querySelector(".button2"); // Div containing NO button
    const p = document.querySelector("p");
    let clickCount = -1;
    
    if (yesButton) {
        yesButton.style.transform = "scale(1)"; // Set initial size
        yesButton.addEventListener("click", function () {
            // Reset background
            document.body.style.backgroundColor = "";
            
            // Reset emojis
            document.querySelectorAll(".sunflower, .heart, .rain, .sad").forEach(el => el.remove());
            
            // Replace h1 with p
            if (p) {
                p.textContent = "I love you so much!!!";
            }
            
            // Remove YES button and replace with a message
            button1Div.innerHTML = "<span class='love-text'>Yeheyy!!!</span>";
    
            // Replace NO button with a marquee message and gif
            button2Div.innerHTML = `
                <marquee behavior="scroll" direction="left" scrollamount="20" class="marquee-text">
                    You're my everything, as always and forever.
                </marquee>
                <img src="yehey.gif" alt="Yehey Celebration" class="celebration-gif">
            `;
        });
    }

    if (noButton) {
        noButton.style.transition = "opacity 0.8s ease-in-out"; // Smooth fading
        noButton.addEventListener("click", function () {
            clickCount++;

            // 🎭 Smooth fade-out from click 20 to 30
            if (clickCount >= 20) {
                let fadeAmount = Math.max(0, (30 - clickCount) / 10); // Gradual fade (1 → 0)
                noButton.style.opacity = fadeAmount;
            }

            // 🔥 Increase YES button size (max 30 clicks)
            if (yesButton && clickCount <= 30) {
                let newSize = 1 + clickCount * 0.05; // Increase by 5% per click
                yesButton.style.transform = `scale(${Math.min(newSize, 2.5)})`; // Max scale 2.5x
            }

            // ❌ Disable NO button after fading out
            if (clickCount === 30) {
                setTimeout(() => {
                    noButton.disabled = true; // Disable button
                    noButton.style.cursor = "not-allowed"; // Change cursor
                }, 800); // Wait for fade-out to complete
            }
        });
    }
});
