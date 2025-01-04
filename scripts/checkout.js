// import { updateOrderSummary } from "./cart.js";

let cartDishes = JSON.parse(localStorage.getItem("cart"));
updateOrderSummary(cartDishes);
 function updateOrderSummary() {

  let subtotal = cartDishes.reduce(
    (sum, item) =>
      sum + (item?.price).replace(/[^\d.]/g, "") * (item?.quantity || 1),
    0
  );

  // Fixed delivery fee (e.g., 5.00)
  let deliveryFee = 5.0;
  let total = subtotal + deliveryFee;

  // Update HTML elements
  document.getElementById("subtotal").textContent = `${subtotal.toFixed(2)}/-`;
  document.getElementById("delivery").textContent = `${deliveryFee.toFixed(
    2
  )}/-`;
  document.getElementById("total").textContent = `${total.toFixed(2)}/-`;
}
updateOrderSummary();