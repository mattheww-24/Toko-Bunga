/* ==========================================
   MAIN SCRIPT
   TR_TokoBunga
========================================== */

/* ===========================
   PAGE LOADER
   Only plays once per browser
   session, not on every visit
   (e.g. clicking "Back to Home").
=========================== */

(function () {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    const alreadyLoaded = sessionStorage.getItem("bloomifyLoaded");

    if (alreadyLoaded) {

        loader.classList.add("hide");

        return;

    }

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

            sessionStorage.setItem("bloomifyLoaded", "1");

        }, 800);

    });

})();

/* ==========================================
   TOAST
========================================== */

function showToast(type, title, message) {

    const toast = document.querySelector("#toast");

    if (!toast) return;

    const toastTitle = document.querySelector("#toastTitle");
    const toastMessage = document.querySelector("#toastMessage");

    toast.classList.remove("show", "error");

    const icon = toast.querySelector("i");

    if (type === "error") {

        toast.classList.add("error");

        icon.setAttribute("data-lucide", "circle-x");

    }

    else {

        icon.setAttribute("data-lucide", "check-circle");

    }

    lucide.createIcons();

    toastTitle.textContent = title;

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}

/* ===========================
   BUTTON RIPPLE
=========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/* ==========================================
   SEARCH
   Toggles a search bar in the navbar and
   filters ".product-card" elements on the
   current page (by ".product-title" text).
========================================== */

(function () {

    const searchToggle = document.querySelector("#searchToggle");
    const searchBar = document.querySelector("#searchBar");
    const searchInput = document.querySelector("#searchInput");
    const searchClose = document.querySelector("#searchClose");

    if (!searchToggle || !searchBar || !searchInput) return;

    function openSearch(e) {

        if (e) e.preventDefault();

        searchBar.classList.add("show");

        searchInput.focus();

    }

    function closeSearch() {

        searchBar.classList.remove("show");

        searchInput.value = "";

        filterProducts("");

    }

    function filterProducts(term) {

        const query = term.trim().toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        let anyVisible = false;

        cards.forEach(card => {

            const title = card.querySelector(".product-title");

            if (!title) return;

            const match = title.textContent.toLowerCase().includes(query);

            card.style.display = match ? "" : "none";

            if (match) anyVisible = true;

        });

        const emptyMsg = document.querySelector("#searchEmpty");

        if (emptyMsg) {

            emptyMsg.style.display = (!anyVisible && query !== "") ? "block" : "none";

        }

    }

    searchToggle.addEventListener("click", openSearch);

    if (searchClose) {

        searchClose.addEventListener("click", closeSearch);

    }

    searchInput.addEventListener("input", () => {

        filterProducts(searchInput.value);

        const flowersSection = document.querySelector("#flowers");

        if (flowersSection) {

            flowersSection.scrollIntoView({ behavior: "smooth", block: "start" });

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") closeSearch();

    });

})();
