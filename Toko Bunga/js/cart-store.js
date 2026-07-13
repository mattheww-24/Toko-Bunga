/* ==========================================
   CART STORE
   Simple localStorage-based cart shared
   across all pages.
========================================== */

const CART_KEY = "bloomify_cart";

function getCart() {

    try {

        const data = JSON.parse(localStorage.getItem(CART_KEY));

        return Array.isArray(data) ? data : [];

    } catch (e) {

        return [];

    }

}

function saveCart(cart) {

    localStorage.setItem(CART_KEY, JSON.stringify(cart));

    updateCartBadge();

}

function addToCart(product, qty) {

    const cart = getCart();

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.qty += qty;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: qty
        });

    }

    saveCart(cart);

}

function updateCartQty(id, qty) {

    const cart = getCart();

    const item = cart.find(i => i.id === id);

    if (item) {

        item.qty = Math.max(1, qty);

    }

    saveCart(cart);

}

function removeFromCart(id) {

    const cart = getCart().filter(i => i.id !== id);

    saveCart(cart);

}

function clearCart() {

    saveCart([]);

}

function getCartCount() {

    return getCart().reduce((sum, i) => sum + i.qty, 0);

}

function getCartTotal() {

    return getCart().reduce((sum, i) => sum + (i.qty * i.price), 0);

}

function formatRupiah(number) {

    return "Rp" + number.toLocaleString("id-ID");

}

/* ==========================================
   NAVBAR CART BADGE
========================================== */

function updateCartBadge() {

    const badge = document.querySelector("#cartBadge");

    if (!badge) return;

    const count = getCartCount();

    badge.textContent = count;

    badge.style.display = count > 0 ? "flex" : "none";

}

document.addEventListener("DOMContentLoaded", updateCartBadge);
