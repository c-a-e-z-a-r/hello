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

            // 🔄 Revert emoji classes back to sunflower and heart
            document.styleSheets[0].insertRule(".sunflower { background-image: url('sunflower.png') !important; }", document.styleSheets[0].cssRules.length);
            document.styleSheets[0].insertRule(".heart { background-image: url('heart.png') !important; }", document.styleSheets[0].cssRules.length);

            
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
});
