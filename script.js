// =========================
// LUXURY WEDDING SCRIPT
// =========================

// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.querySelector(".loader");

        loader.style.opacity = "0";

        loader.style.visibility =
        "hidden";

    }, 1500);

});


// =========================
// COUNTDOWN
// =========================

const weddingDate =
new Date("2026-10-15T18:00:00").getTime();

const countdown =
document.getElementById("countdown");

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    weddingDate - now;

    if(distance < 0){

        countdown.innerHTML =
        "<h2>❤️ Той башталды ❤️</h2>";

        return;
    }

    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );

    const hours =
    Math.floor(
        (
            distance %
            (1000*60*60*24)
        )
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (
            distance %
            (1000*60*60)
        )
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (
            distance %
            (1000*60)
        )
        /
        1000
    );

    countdown.innerHTML =

    `
    <div class="time-box">
        <span>${days}</span>
        Күн
    </div>

    <div class="time-box">
        <span>${hours}</span>
        Саат
    </div>

    <div class="time-box">
        <span>${minutes}</span>
        Мүнөт
    </div>

    <div class="time-box">
        <span>${seconds}</span>
        Секунда
    </div>
    `;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


// =========================
// MUSIC
// =========================

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener(
"click",
() => {

    if(!playing){

        music.play();

        musicBtn.innerHTML =
        "🔇";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML =
        "🎵";

        playing = false;
    }

});


// =========================
// RSVP
// =========================

const form =
document.getElementById(
"rsvpForm"
);

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    alert(
    "❤️ Рахмат! Сиздин жообуңуз кабыл алынды."
    );

    form.reset();

});


// =========================
// SCROLL ANIMATION
// =========================

const sections =
document.querySelectorAll(
".invitation, .countdown-section, .love-story, .gallery-section, .location-section, .rsvp-section"
);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(
    (entry)=>{

        if(
        entry.isIntersecting
        ){

            entry.target.style.opacity =
            "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},

{
    threshold:0.2
}

);

sections.forEach(
(section)=>{

    section.style.opacity =
    "0";

    section.style.transform =
    "translateY(70px)";

    section.style.transition =
    "all 1s ease";

    observer.observe(section);

});


// =========================
// GALLERY EFFECT
// =========================

const images =
document.querySelectorAll(
".gallery img"
);

images.forEach(img => {

    img.addEventListener(
    "click",
    () => {

        img.style.transform =
        "scale(1.1)";

        setTimeout(() => {

            img.style.transform =
            "scale(1)";

        }, 400);

    });

});