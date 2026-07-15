const messages = {
    1: "Welcome to a tiny corner that's totally yours.",
    2: "Rachna, you don't have any idea how glad I am that you exist.",
    3: "You are the strongest and the bravest girl I have seen. I don't know if I can say it enough, but I'm so proud of you.",
    4: "Jyada tareef nahi karenge... tum ho itni Bio. Huh...",
    5: "You know, ye boka AI itna cheesy cheesy lines de raha tha for this star...",
    6: "Aur haan, ye wala star aapse sorry bolne ke liye hai. I know I'm always wrong... please unblock kar do.",
    7: "I think sirf stars can't define you because you're my Chand..."
};

const moonMessage = `
🌙 The Moon's Secret 🌙

Stars are beautiful because they shine from far away.

But the moon is different.

No matter how many stars fill the sky,
people still look for the moon first.

Maybe that's why seven stars weren't enough for you.

Because to me, you were never one of the stars.

You were always my Chand.
`;

const stars = document.querySelectorAll(".star");
const messageBox = document.getElementById("messageBox");
const progress = document.getElementById("progress");
const moon = document.getElementById("moon");

let opened = 0;
let clickedStars = [];

stars.forEach(star => {

    star.addEventListener("click", () => {

        const id = star.dataset.id;

        if(clickedStars.includes(id)) return;

        clickedStars.push(id);

        opened++;

        progress.innerText = `${opened} / 7 Stars Discovered`;

        messageBox.innerText = messages[id];

        messageBox.style.opacity = "1";

       star.style.opacity = "0.5";
star.style.transform = "scale(0.9)";
star.style.boxShadow = `
0 0 15px #ffd54f,
0 0 30px #ffd54f,
0 0 50px #ffd54f
`;
        setTimeout(() => {
            messageBox.style.opacity = "0";
        }, 8000);

        if(opened === 7){
            moon.style.cursor = "pointer";
            moon.style.cursor = "pointer";

moon.style.transform = "scale(1.15)";

moon.style.filter = `
drop-shadow(0 0 25px white)
drop-shadow(0 0 50px white)
drop-shadow(0 0 90px #ffffff)
`;

moon.style.animation = "moonGlow 2s infinite alternate";
            moon.style.transition = "1s";

            setTimeout(() => {
                messageBox.innerText =
                    "The moon seems to have something to say... 🌙";
                messageBox.style.opacity = "1";

                setTimeout(() => {
                    messageBox.style.opacity = "0";
                }, 10000);

            }, 2000);
        }
    });
});

moon.addEventListener("click", async () => {

    if(opened !== 7) return;

    const moonLines = [
        "🌙 The Moon's Secret 🌙",
        "",
        "Stars are beautiful because they shine from far away.",
        "",
        "But the moon is different.",
        "",
        "No matter how many stars fill the sky,",
        "",
        "people still look for the moon first.",
        "",
        "Maybe that's why seven stars weren't enough for you.",
        "",
        "Because to me, you were never one of the stars.",
        "",
        "You were always my Chand. 🌙"
    ];

    messageBox.innerHTML = "";
    messageBox.style.opacity = "1";

    for(const line of moonLines){

        const p = document.createElement("div");

        p.innerText = line;

        p.style.marginBottom = "15px";

        if(line === "You were always my Chand. 🌙"){
            moon.style.filter = `
drop-shadow(0 0 30px white)
drop-shadow(0 0 60px white)
drop-shadow(0 0 120px #fff5b0)
`;
            p.style.fontSize = "70px";
            p.style.color = "#ffe58f";
            p.style.fontWeight = "bold";
        }

        messageBox.appendChild(p);

        await new Promise(resolve =>
            setTimeout(resolve, 2500)
        );
    }

});
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    if(bgMusic.paused){
        bgMusic.play();
        musicBtn.innerText = "⏸ Pause Music";
    }
    else{
        bgMusic.pause();
        musicBtn.innerText = "🎵 Play Music";
    }

});
