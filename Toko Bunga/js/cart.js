/* ==========================================
   CART PAGE
========================================== */

const cartList = document.querySelector("#cartList");
const cartSummary = document.querySelector("#cartSummary");
const cartEmpty = document.querySelector("#cartEmpty");

const subtotalEl = document.querySelector("#subtotal");
const totalEl = document.querySelector("#totalPrice");

function renderCart() {

    const cart = getCart();

    if (cart.length === 0) {

        cartList.innerHTML = "";

        if (cartSummary) cartSummary.style.display = "none";

        if (cartEmpty) cartEmpty.style.display = "block";

        lucide.createIcons();

        return;

    }

    if (cartSummary) cartSummary.style.display = "";
    if (cartEmpty) cartEmpty.style.display = "none";

    cartList.innerHTML = cart.map(item => `

        <div class="cart-item" data-id="${item.id}">

            <div class="cart-image">
                <img src="../${item.image}" alt="${item.name}">
            </div>

            <div class="cart-info">
                <h2>${item.name}</h2>
                <p>Fresh Premium Flower Bouquet</p>
                <h3>${formatRupiah(item.price)}</h3>
            </div>

            <div class="cart-quantity">
                <button class="cart-minus" data-id="${item.id}">-</button>
                <span>${item.qty}</span>
                <button class="cart-plus" data-id="${item.id}">+</button>
            </div>

            <div class="cart-remove">
                <button class="cart-remove-btn" data-id="${item.id}">Remove</button>
            </div>

        </div>

    `).join("");

    updateTotals();

    attachCartEvents();

}

function updateTotals() {

    const total = getCartTotal();

    if (subtotalEl) subtotalEl.textContent = formatRupiah(total);
    if (totalEl) totalEl.textContent = formatRupiah(total);

}

function attachCartEvents() {

    document.querySelectorAll(".cart-minus").forEach(btn => {

        btn.addEventListener("click", () => {

            const id = btn.dataset.id;

            const item = getCart().find(i => i.id === id);

            if (item && item.qty > 1) {

                updateCartQty(id, item.qty - 1);

                renderCart();

            }

        });

    });

    document.querySelectorAll(".cart-plus").forEach(btn => {

        btn.addEventListener("click", () => {

            const id = btn.dataset.id;

            const item = getCart().find(i => i.id === id);

            if (item) {

                updateCartQty(id, item.qty + 1);

                renderCart();

            }

        });

    });

    document.querySelectorAll(".cart-remove-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            removeFromCart(btn.dataset.id);

            renderCart();

        });

    });

}

renderCart();
