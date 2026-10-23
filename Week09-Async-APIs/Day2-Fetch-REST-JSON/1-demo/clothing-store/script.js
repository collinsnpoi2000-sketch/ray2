// grab the html elements
const productContainer = document.querySelector("product-container");
const cartBtn = document.getElementById("cart-btn");
const modalElem = document.getElementById("cart-modal");
const cartCountElem = document.getElementById("cart-count");

// create a function to fetch store products from the free endpoint API 
async function fetchProducts() {
try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productsArray = await response.json();
    console.log(productsArray);

} catch (error) {
    console.error("error fetching products:", error);
    productContainer.innerHTML = "<p>Failed to load products...</p>"
}
}

// create a function to display the products on the browser
function displayFetcchedProducts() {
const productCard = productsArray.map((product) => {
    return` <div class="product-card">
    <img src="${product.image}" alt="${product.title}"></img>
        <h3>${product.title}</h3>
        <p>${product.description.slice{0, 100}}...</p>
        </div>
    `
}).join();
productContainer.innerHTML;
}

// load products when the products loads and the document finishes parsing
document.addEventListener("DOMContentLoad", fetchProducts);