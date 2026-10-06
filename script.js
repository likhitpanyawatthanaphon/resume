/* =====================================================
   FUTURISTIC RESUME JAVASCRIPT
===================================================== */


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("active");

        const icon =
            menuToggle.querySelector("i");

        if (
            navMenu.classList.contains("active")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);



/* =====================================================
   CLOSE MENU
===================================================== */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }
        );

    });



/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement =
    document.getElementById("typingText");


const words = [

    "Software Developer",

    "Web Developer",

    "Data Enthusiast",

    "AI Explorer",

    "Problem Solver"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (
            characterIndex === 0
        ) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}


typeEffect();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   MOUSE GLOW
===================================================== */

const cursorGlow =
    document.getElementById(
        "cursorGlow"
    );


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =====================================================
   PROFILE CARD TILT
===================================================== */

const profileCard =
    document.querySelector(
        ".profile-card"
    );


if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                profileCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 8;


            const rotateX =
                ((centerY - y) /
                    centerY) * 8;


            profileCard.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =

                `perspective(1000px)
                 rotateX(0deg)
                 rotateY(-7deg)
                 translateY(0)`;

        }
    );

}



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%c Welcome to my Resume Website 🚀 ",
    "color:#00eaff;font-size:16px;font-weight:bold;"
);

console.log(
    "%c Built with HTML + CSS + JavaScript ",
    "color:#8b5cf6;font-size:12px;"
);
