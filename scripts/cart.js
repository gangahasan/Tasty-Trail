import { displayMenu } from "./displayMenu.js";

let cartDishes = JSON.parse(localStorage.getItem("cart"));

if (cartDishes === null) {
  alert("Your cart is Empty")
}
getCartDishes(cartDishes);
function getCartDishes(cartDishes) {
    let dishcont = document.getElementById("dishescont");
    dishcont.innerHTML = "";
    cartDishes.map((el,i) => {
      let cartitem = document.createElement("div");
      cartitem.classList.add("cartitem");

      let img = document.createElement("img");
      let detail = document.createElement("div");
      detail.classList.add("detail");

      let receipename = document.createElement("h4");
      let price = document.createElement("p");

      img.src = el.image;
      receipename.textContent = el.receipename;
      price.textContent = `Price:  ${el.price}`;

    //   detail.append(receipename, price);

      
      let quantityControls = document.createElement("div");
      quantityControls.classList.add("quantity-controls");

      let minusButton = document.createElement("button");
      minusButton.textContent = "-";
      minusButton.addEventListener("click", () => updateQuantity(i, -1));

      let quantity = document.createElement("span");
      quantity.textContent = el.quantity || 1; 
      console.log("quantity",el.quantity)// Default quantity to 1 if not present

      let plusButton = document.createElement("button");
      plusButton.textContent = "+";
      plusButton.addEventListener("click", () => updateQuantity(i, 1));

      quantityControls.append(minusButton, quantity, plusButton);
      
      detail.append(receipename, price, quantityControls);

      // Delete button
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", () => deleteItem(i));

      cartitem.append(img, detail, quantityControls, deleteButton);
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
  getCartDishes(cartDishes); // Re-render the cart
}

// Delete item
function deleteItem(index) {
    cartDishes.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartDishes));
  getCartDishes(cartDishes); // Re-render the cart
}

let checkout = document.getElementById("checkout");

checkout.addEventListener("click", () => {
    window.location.href = "checkout.html";
});

