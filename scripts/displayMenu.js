export function displayMenu(menu, isAddtoCart, isOrderNow) {
  let dishescont = document.getElementById("dishescont");
  dishescont.innerHTML = "";

  menu.map((el, i) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    let receipename = document.createElement("h4");
    let price = document.createElement("h4");
    let rating = document.createElement("h4");

    image.src = el.image;
    // console.log({ el });

    receipename.textContent = el.receipename;
    price.textContent = `Price:  ${el.price}`;
    rating.textContent = `Rating: ${el.rating}`;

    let dishObj = { image, receipename, price, rating };

    card.append(image, receipename, price, rating);

    if (isAddtoCart == true) {
      let addToCartBtn = document.createElement("button");
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.addEventListener("click", function(){
        console.log("clicked")
       let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(el);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        alert("Item added to cart");
      });
      card.append(addToCartBtn);
    }

    if (isOrderNow == true) {
      let orderNowBtn = document.createElement("button");
      orderNowBtn.textContent = "Order Now";
      orderNowBtn.addEventListener("click", function(){
        console.log("clicked")
        let orderitems =
          JSON.parse(localStorage.getItem(JSON.stringify("order"))) || [];
        orderitems.push(dishObj);
        localStorage.setItem("order", JSON.stringify(orderitems));
        window.location.href = "checkout.html";
      });
      card.append(orderNowBtn);
    }

    dishescont.append(card);
  });
}
