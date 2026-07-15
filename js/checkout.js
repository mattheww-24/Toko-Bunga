const form = document.querySelector("#checkoutForm");
const summaryList = document.querySelector("#checkoutSummaryList");
const summaryTotal = document.querySelector("#checkoutTotal");

function renderSummary() {

    const cart = getCart();

    if (!summaryList) return;

    if (cart.length === 0) {

        summaryList.innerHTML = `<p class="checkout-empty">Your cart is empty. Please add a flower before checking out.</p>`;

        if (summaryTotal) summaryTotal.textContent = formatRupiah(0);

        return;

    }

    summaryList.innerHTML = cart.map(item => `

        <div class="checkout-summary-row">
            <span>${item.name} <b>x${item.qty}</b></span>
            <span>${formatRupiah(item.price * item.qty)}</span>
        </div>

    `).join("");

    if (summaryTotal) summaryTotal.textContent = formatRupiah(getCartTotal());

}

renderSummary();

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const fullname = document.querySelector("#fullname").value.trim();

    const phone = document.querySelector("#phone").value.trim();

    const address = document.querySelector("#address").value.trim();

    const payment = document.querySelector("#payment").value;

    if (getCart().length === 0) {

        showToast(
            "error",
            "Cart is Empty",
            "Please add a flower to your cart first."
        );

        return;

    }

    if (fullname === "") {

        showToast(
            "error",
            "Full Name",
            "Please enter your full name."
        );

        return;

    }

    if (phone === "") {

        showToast(
            "error",
            "Phone Number",
            "Please enter your phone number."
        );

        return;

    }

    if (address === "") {

        showToast(
            "error",
            "Address",
            "Please enter your address."
        );

        return;

    }

    if (payment === "") {

        showToast(
            "error",
            "Payment",
            "Please select a payment method."
        );

        return;

    }

    showToast(
        "success",
        "Order Success",
        "Thank you for your purchase!"
    );

    clearCart();

    const checkoutGrid = document.querySelector("#checkoutGrid");
    const orderSuccess = document.querySelector("#orderSuccess");

    checkoutGrid.style.display = "none";

    orderSuccess.classList.add("show");

});
