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
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(item => item.title === ticket.title && item.details === ticket.details);

            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(ticket);
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Bilet adăugat în coș!");
        });
    });
});
