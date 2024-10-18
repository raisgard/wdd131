 // scripts/form.js
/*const products = [
    { id: "fc-1888", name: "flux capacitor", avgRating: 4.5 },
    { id: "fc-2050", name: "power laces", avgRating: 4.7 },
    { id: "fs-1987", name: "time circuits", avgRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", avgRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", avgRating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});*/

// scripts/form.js
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

// Function to populate Product Name options
function populateProductOptions() {
    const productSelect = document.getElementById("product_id");
    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Function to increment review counter in localStorage
function incrementReviewCounter() {
    let reviewCount = localStorage.getItem("reviewCount");
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
}

document.addEventListener("DOMContentLoaded", () => {
    // Populate Product Name options
    populateProductOptions();

    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
        // Increment review counter
        incrementReviewCounter();
    });
});