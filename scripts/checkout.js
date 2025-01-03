import { updateOrderSummary } from "./cart.js";

let cartDishes = JSON.parse(localStorage.getItem("cart"));
console.log("cart",cartDishes);
updateOrderSummary();