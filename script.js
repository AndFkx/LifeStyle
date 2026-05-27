// MENU RESPONSIVE

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// FILTROS DE MOTOS

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".moto-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // BOTON ACTIVO
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // FILTRO
        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 100);

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(0.8)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);

            }

        });

    });

});


// ANIMACION AL HACER SCROLL

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});


// BOTON WHATSAPP

const whatsappBtn = document.querySelector(".whatsapp-btn");

whatsappBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const numero = "573242187473";

    const mensaje =
    "Hola, quiero información sobre las motos de LifeStyle";

    const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

});


// EFECTO NAVBAR AL BAJAR

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.padding = "15px 8%";

    } else {

        navbar.style.background = "rgba(0,0,0,0.7)";
        navbar.style.padding = "20px 8%";

    }

});


// EFECTO APARICION

const hiddenElements = document.querySelectorAll(
    ".moto-card, .beneficio-box, .contact-form"
);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach(el => {
    revealObserver.observe(el);
});