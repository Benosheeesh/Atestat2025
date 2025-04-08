document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".event .btn");

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const eventDiv = btn.closest(".event");
            const title = eventDiv.querySelector("h3").innerText;
            const details = eventDiv.querySelector("p").innerText;

            const ticket = {
                title: title,
                details: details,
                quantity: 1 // implicit 1 bilet
            };

            // Ia cartul din localStorage sau initializează unul nou
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Verificăm dacă biletul există deja (după titlu și detalii)
            const existing = cart.find(item => item.title === ticket.title && item.details === ticket.details);

            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(ticket);
            }

            // Salvăm înapoi în localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Bilet adăugat în coș!");
        });
    });
});
