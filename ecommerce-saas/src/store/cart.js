import { reactive, computed } from 'vue';

// Simple reactive store for the cart
const cartState = reactive({
  items: [], // Array of { id, name, price, quantity, imageUrl }
});

// Function to add an item to the cart
export function addToCart(product, quantity = 1) {
  const existingItem = cartState.items.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartState.items.push({ ...product, quantity });
  }
}

// Function to remove an item from the cart
export function removeFromCart(productId) {
  cartState.items = cartState.items.filter(item => item.id !== productId);
}

// Function to update item quantity
export function updateCartItemQuantity(productId, quantity) {
  const item = cartState.items.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
    }
  }
}

// Computed property for the total number of items in the cart
export const cartItemCount = computed(() => {
  return cartState.items.reduce((total, item) => total + item.quantity, 0);
});

// Computed property for the total price of items in the cart
export const cartTotalPrice = computed(() => {
  return cartState.items.reduce((total, item) => total + (item.price * item.quantity), 0);
});

// Expose the reactive state (read-only version for components)
export const cartItems = computed(() => cartState.items);

// Function to clear the cart
export function clearCart() {
  cartState.items = [];
}
