import { displayMenu } from "./displayMenu.js";

let cartDishes = JSON.parse(localStorage.getItem("cart"));

if (cartDishes === null) {
  cartDishes = [];
}
getCartDishes(cartDishes);
console.log("CartDishes", cartDishes);
function getCartDishes(cartDishes) {

    console.log("cart",cartDishes);

    let dishcont = document.getElementById("dishescont");
    dishcont.innerHTML = "";
    cartDishes.map((el)=>{

        let cartitem = document.createElement("div");
        cartitem.classList.add("cartitem");

        let img = document.createElement("img");
        let detail = document.createElement("div");

        let receipename = document.createElement("h4");
        let price = document.createElement("p");

        img.src = el.image;
        receipename.textContent = el.receipename;
        price.textContent = `Price:  ${el.price}`;

        detail.append(receipename,price);
        cartitem.append(img,detail);

         dishcont.append(cartitem);
    })    
}

