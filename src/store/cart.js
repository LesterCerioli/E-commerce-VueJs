import { reactive, computed } from 'vue';


const cartState = reactive({
  items: [], 
});


export function addToCart(product, quantity = 1) {
  const existingItem = cartState.items.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartState.items.push({ ...product, quantity });
  }
}


export function removeFromCart(productId) {
  cartState.items = cartState.items.filter(item => item.id !== productId);
}


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


export const cartItemCount = computed(() => {
  return cartState.items.reduce((total, item) => total + item.quantity, 0);
});


export const cartTotalPrice = computed(() => {
  return cartState.items.reduce((total, item) => total + (item.price * item.quantity), 0);
});


export const cartItems = computed(() => cartState.items);


export function clearCart() {
  cartState.items = [];
}
