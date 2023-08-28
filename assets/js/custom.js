let card = document.querySelectorAll(".card-2");

card.forEach((a) => {
    a.addEventListener("click", () => { 
        const b = document.querySelector(".active");
        a.classList.toggle("active");
        b && b.classList.remove("active");
    });
});
