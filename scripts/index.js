import { baseUrl } from "./baseUrl.js";

let button = document.getElementById("order");
button.addEventListener("click", function () {
    console.log("clicked")
  window.location.href = "menu.html";
});

window.onload = getData;


  
function getData(){
    let dishes = document.getElementById("dishes");
    dishes.innerHTML = "";

    fetch(`${baseUrl}/featuredDishes`)
      .then((res) => res.json())
      .then((data) => {
        data.map((el, i) => {
          let card = document.createElement("div");
          let image = document.createElement("img");
          let dishname = document.createElement("h3");
          let price = document.createElement("h3");
          let orderNow = document.createElement("button");

          image.src = el.image;
          dishname.textContent = el.receipename;
          price.textContent = `Price: ${el.price}`;
          orderNow.textContent = "Order Now";

          card.append(image, dishname, price, orderNow);
          dishes.append(card);
        });
        
    })
    .catch((err)=>{
        console.log(err);
        alert("Failed to fetch data");
    })
}

