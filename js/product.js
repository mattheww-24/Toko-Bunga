const params = new URLSearchParams(window.location.search);

const productId = params.get("product") || "garden-roses";

const product = getProductById(productId) || PRODUCTS[0];

function renderProduct() {

    const img = document.querySelector("#productImage");
    const title = document.querySelector("#productTitle");
    const rating = document.querySelector("#productRating");
    const price = document.querySelector("#productPrice");
    const description = document.querySelector("#productDescription");

    if (img) img.src = "../" + product.image;
    if (img) img.alt = product.name;

    if (title) title.textContent = product.name;

    if (rating) {

        rating.textContent = "★★★★★ (" + product.reviews + " Reviews)";

    }

    if (price) price.textContent = formatRupiah(product.price);

    if (description) description.textContent = product.description;

    document.title = product.name + " | Bloomify";

}

renderProduct();

const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const quantityText = document.querySelector("#quantity");
const addCartBtn = document.querySelector("#addCart");

let quantity = 1;

if (minusBtn) {

    minusBtn.addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            quantityText.textContent = quantity;

        }

    });

}

if (plusBtn) {

    plusBtn.addEventListener("click", () => {

        quantity++;

        quantityText.textContent = quantity;

    });

}

if (addCartBtn) {

    addCartBtn.addEventListener("click", () => {

        addToCart(product, quantity);

        showToast(
            "success",
            "Added to Cart",
            product.name + " (x" + quantity + ") has been added to your cart."
        );

        const originalLabel = addCartBtn.textContent;

        addCartBtn.disabled = true;

        addCartBtn.classList.add("added");

        addCartBtn.textContent = "✓ Added to Cart";

        setTimeout(() => {

            addCartBtn.disabled = false;

            addCartBtn.classList.remove("added");

            addCartBtn.textContent = originalLabel;

        }, 1800);

    });

}
