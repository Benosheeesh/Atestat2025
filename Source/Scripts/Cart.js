document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const pricePerTicket = 50;
            const itemTotal = item.quantity * pricePerTicket;
            total += itemTotal;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <p><strong>${item.title}</strong></p>
                <p>${item.details}</p>
                <label>Cantitate: 
                    <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="qty-input">
                </label>
                <p>Preț: ${itemTotal} RON</p>
                <button class="remove-item" data-index="${index}">Șterge</button>
                <hr>
            `;

            cartContainer.appendChild(cartItem);
        });

        totalElement.textContent = total;
    }

    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    cartContainer.addEventListener("input", (e) => {
        if (e.target.classList.contains("qty-input")) {
            const index = e.target.getAttribute("data-index");
            const newQty = parseInt(e.target.value);

            if (newQty > 0) {
                cart[index].quantity = newQty;
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            }
        }
    });

    renderCart();
});
