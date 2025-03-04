import { displayMenu } from "./displayMenu.js";

let cartDishes = JSON.parse(localStorage.getItem("cart"));

if (cartDishes === null) {
  alert("Your cart is Empty,Please add your favourite items from menu.");
  window.location.href= "menu.html";
}
getCartDishes(cartDishes);
function getCartDishes(cartDishes) {
  let dishcont = document.getElementById("dishescont");
  dishcont.innerHTML = " ";
  cartDishes.map((el, i) => {
    let cartitem = document.createElement("div");
    cartitem.classList.add("cartitem");

    let img = document.createElement("img");
    let detail = document.createElement("div");
    let imgDetail = document.createElement("div");
    imgDetail.classList.add("imgDetail");
    detail.classList.add("detail");

    let receipename = document.createElement("h4");
    let price = document.createElement("p");

    img.src = el.image;
    receipename.textContent = el.receipename;
    // price.textContent = `Price:  ${el.price}`;

    //   detail.append(receipename, price);
    let update = document.createElement("div");
    update.classList.add("update");

    let quantityControls = document.createElement("div");
    quantityControls.classList.add("quantity-controls");

    let minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.addEventListener("click", () => updateQuantity(i, -1));

    let quantity = document.createElement("span");
    let quantityValue = el.quantity || 1;
    let priceValue = (el?.price).replace(/[^\d.]/g, "");
    quantity.textContent = el.quantity || 1;
    console.log("quantity", quantityValue, priceValue); // Default quantity to 1 if not present
    price.textContent = `Price: ₹${priceValue * quantityValue}`;

    let plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.addEventListener("click", () => updateQuantity(i, 1));

    quantityControls.append(minusButton, quantity, plusButton);

    detail.append(receipename, price);
    imgDetail.append(img , detail);

    // Delete button
    let deleteButton = document.createElement("button");
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/bin.png";
    deleteIcon.classList.add("deleteicon");
    deleteButton.append(deleteIcon);

    update.append(quantityControls, deleteButton);

    deleteButton.classList.add("deletebtn");
    deleteButton.addEventListener("click", () => deleteItem(i));

    cartitem.append(imgDetail, update);
    dishcont.append(cartitem);
  });
}
function updateQuantity(index, change) {
  if (cartDishes[index].quantity === undefined) {
    cartDishes[index].quantity = 1;
  }
  cartDishes[index].quantity += change;

  if (cartDishes[index].quantity < 0) {
    cartDishes[index].quantity = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cartDishes));

  updateOrderSummary();
  getCartDishes(cartDishes); // Re-render the cart
}

// Delete item
function deleteItem(index) {
  cartDishes.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartDishes));
  getCartDishes(cartDishes); // Re-render the cart
}

export function updateOrderSummary() {
  console.log("dishes", cartDishes);

  let subtotal = cartDishes.reduce(
    (sum, item) =>
      sum + (item?.price).replace(/[^\d.]/g, "") * (item?.quantity || 1),
    0
  );

  // Fixed delivery fee (e.g., 5.00)
  let deliveryFee = 5.0;

  // Calculate total
  let total = subtotal + deliveryFee;

  // Update HTML elements
  document.getElementById("subtotal").textContent = `${subtotal.toFixed(2)}/-`;
  document.getElementById("delivery").textContent = `${deliveryFee.toFixed(
    2
  )}/-`;
  document.getElementById("total").textContent = `${total.toFixed(2)}/-`;
}
updateOrderSummary();

let checkout = document.getElementById("checkout");

checkout.addEventListener("click", () => {
  window.location.href = "checkout.html";
});
