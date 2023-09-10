// Sample products
const products = [
  {
    id: 1,
    name: "Crock-Pot Manual Slow Cooker Stainless Steel",
    price: 10.99,
    quantity: 1,
    liked: false,
    image: "cookpot.jpg",
  },
  {
    id: 2,
    name: "Bullet Style Electronic Foodmixer Top Notch",
    price: 15.49,
    quantity: 1,
    liked: false,
    image: "bullet.jpg",
  },
];

// Function to display cart items
function displayCartItems() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let totalPrice = 0;

  products.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <div class="item">
        <div class="item-image">
            <img src="${product.image}" alt="${
      product.name
    }" style="width: 200px; height: 200px;">
        </div>
        <div class="item-details">
            <h3>${product.name}</h3>
            <p>Price: $${(product.price * product.quantity).toFixed(2)}</p>
            <div class="actions">
                <button onclick="incrementQuantity(${product.id})">+</button>
                <span>${product.quantity}</span>
                <button onclick="decrementQuantity(${product.id})">-</button>
                <button class="like-button" onclick="toggleLike(${product.id})">
                    <i class="${product.liked ? "fas" : "far"} fa-heart"></i>
                </button>
                <button class="delete-button" onclick="deleteItem(${
                  product.id
                })">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
        `;

    cartItems.appendChild(cartItem);
    totalPrice += product.price * product.quantity; // Update the price based on quantity
  });

  // Update and display total price
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Function to increment the quantity of a product
function incrementQuantity(productId) {
  const product = products.find((product) => product.id === productId);

  if (product) {
    product.quantity++;
    displayCartItems();
  }
}

// Function to decrement the quantity of a product
function decrementQuantity(productId) {
  const product = products.find((product) => product.id === productId);

  if (product && product.quantity > 0) {
    product.quantity--;
    displayCartItems();
  }
}

// Function to toggle the "liked" state
function toggleLike(productId) {
  const product = products.find((product) => product.id === productId);

  if (product) {
    product.liked = !product.liked;
    displayCartItems();
  }
}

// Function to delete a product from the cart
function deleteItem(productId) {
  const index = products.findIndex((product) => product.id === productId);

  if (index !== -1) {
    products.splice(index, 1);
    displayCartItems();
  }
}

// Initial display of cart items and total price
displayCartItems();
