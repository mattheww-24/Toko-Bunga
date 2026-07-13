/* ==========================================
   PRODUCT DATA
   Single source of truth for all products.
   Image paths are relative to the project root
   (index.html). Pages inside /pages/ prepend "../".
========================================== */

const PRODUCTS = [
    {
        id: "garden-roses",
        name: "Garden Roses",
        price: 150000,
        rating: 5,
        reviews: 124,
        image: "assets/images/products/garden-roses.png",
        description: "Fresh premium garden roses arranged beautifully for birthdays, anniversaries, graduations, weddings, and other special occasions."
    },
    {
        id: "white-lily",
        name: "White Lily",
        price: 180000,
        rating: 5,
        reviews: 98,
        image: "assets/images/products/white-lily.png",
        description: "Elegant white lilies known for their calming fragrance, perfect as a gift for graduations, sympathy, or a simple gesture of appreciation."
    },
    {
        id: "midnight-rose",
        name: "Midnight Rose",
        price: 165000,
        rating: 5,
        reviews: 76,
        image: "assets/images/products/midnight-rose.png",
        description: "A deep, romantic bouquet of dark red roses arranged for anniversaries, date nights, or anyone who loves a bold statement."
    },
    {
        id: "spring-peony",
        name: "Spring Peony",
        price: 175000,
        rating: 5,
        reviews: 112,
        image: "assets/images/products/spring-peony.png",
        description: "Soft, full-bloomed peonies bursting with color, ideal for birthdays, housewarmings, or brightening someone's day."
    }
];

/* Helper: find one product by id */

function getProductById(id) {

    return PRODUCTS.find(p => p.id === id);

}
