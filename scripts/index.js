import { baseUrl } from "./baseUrl.js";

let button = document.getElementById("order");
button.addEventListener("click", function () {
    console.log("clicked")
  window.location.href = "menu.html";
});

window.onload = getData;


  
// function getData(){
//     let dishes = document.getElementById("dishes");
//     dishes.innerHTML = "";

//     fetch(`${baseUrl}/featuredDishes`)
//       .then((res) => res.json())
//       .then((data) => {
//         data.map((el, i) => {
//           let card = document.createElement("div");
//           let image = document.createElement("img");
//           let dishname = document.createElement("h3");
//           let price = document.createElement("h3");
//           let orderNow = document.createElement("button");
//           orderNow.addEventListener("click", function(){
//             let cart = JSON.parse(localStorage.getItem("cart")) || [];
//             cart.push(el);
//             localStorage.setItem("cart", JSON.stringify(cart));
//             window.location.href = "cart.html";
//           })

//           image.src = el.image;
//           dishname.textContent = el.receipename;
//           price.textContent = `Price: ${el.price}`;
//           orderNow.textContent = "Order Now";

//           card.append(image, dishname, price, orderNow);
//           dishes.append(card);
//         });
        
//     })
//     .catch((err)=>{
//         console.log(err);
//         alert("Failed to fetch data");
//     })
// }
function getData() {
  let dishes = document.getElementById("dishes");
  dishes.innerHTML = "";

  fetch(`${baseUrl}/featuredDishes`)
    .then((res) => res.json())
    .then((data) => {
      if (!data || data.length === 0) {
        dishes.innerHTML = "<p>No products available</p>";
        return;
      }

      let slidesToShow = Math.min(data.length, 5); // Show only available products, max 3

      data.forEach((el) => {
        let card = document.createElement("div");
        card.classList.add("swiper-slide");

        let image = document.createElement("img");
        let dishname = document.createElement("h3");
        let price = document.createElement("h3");
        let orderNow = document.createElement("button");

        orderNow.addEventListener("click", function () {
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.push(el);
          localStorage.setItem("cart", JSON.stringify(cart));
          window.location.href = "cart.html";
        });

        image.src = el.image;
        dishname.textContent = el.receipename;
        price.textContent = `Price: ${el.price}`;
        orderNow.textContent = "Order Now";

        card.append(image, dishname, price, orderNow);
        dishes.append(card);
      });

      // Destroy existing Swiper instance if already initialized
      if (window.mySwiper) {
        window.mySwiper.destroy();
      }

      // Initialize Swiper after data is loaded
     window.mySwiper = new Swiper(".mySwiper", {
       slidesPerView: "auto", // Ensures slides take the correct width
       spaceBetween: 10, // Reduce spacing to minimize extra space
       loop: data.length > slidesToShow,
       centeredSlides: data.length < slidesToShow,
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       autoplay: {
         delay: 2000,
         disableOnInteraction: false,
       },
     });

    })
    .catch((err) => {
      console.log(err);
      alert("Failed to fetch data");
    });
}




