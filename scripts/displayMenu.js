

export function displayMenu(menu,isAddtoCart,isOrderNow){
    let itemscont = document.getElementById("items");
    itemscont.innerHTML = "";

    menu.map((el,i)=>{
        let card = document.createElement("div");

        let image = document.createElement("img");
        let receipename = document.createElement("h2");
        let type = document.createElement("h3");
        let price = document.createElement("h3");
        let rating = document.createElement("h3");

        image.src = el.image;
        receipename.textContent = el.receipename;
        type.textContent = el.type;
        price.textContent = "Price: $" + el.price;
        rating.textContent = "Rating: " + el.rating;
        
        let itemObj = {image,receipename, type, price, rating}

        card.append(image, receipename, type, price, rating);

        if(isAddtoCart == true){
            let addToCartBtn = document.createElement("button");
            addToCartBtn.textContent = "Add to Cart";
            addToCartBtn.addEventListener("click", ()=>{
                let cartitems = JSON.parse(localStorage.getItem(JSON.stringify("cart"))) ||[];
                cartitems.push(itemObj);
                localStorage.setItem("cart", JSON.stringify(cartitems));
                
            });
            card.append(addToCartBtn);
        }
        
        if(isOrderNow == true){
            let orderNowBtn = document.createElement("button");
            orderNowBtn.textContent = "Order Now";
            orderNowBtn.addEventListener("click", ()=>{
                let orderitems = JSON.parse(localStorage.getItem(JSON.stringify("order"))) || [];
                orderitems.push(itemObj);
                localStorage.setItem("order", JSON.stringify(orderitems));
                window.location.href = "checkout.html";
            });
            card.append(orderNowBtn);
        }
        
        cont.append(card);
    })
}


