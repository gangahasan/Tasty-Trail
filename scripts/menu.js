import { baseUrl } from "./baseUrl.js";
import { displayMenu } from "./displayMenu.js";

window.onload = displayDishes("BURGERS");
function displayDishes(item) {
  fetch(`${baseUrl}/dishes`)
    .then((response) => response.json())
    .then((products) => {
      let burgersObject = products.filter((el, i) => el.title === item);
      if (burgersObject.length === 0) {
        console.log("No such dish found");
        return;
      }
      let dishescont = document.getElementById("dishescont");
      let title = document.createElement("h2");
      title.textContent = item;
      dishescont.append(title);

      displayMenu(burgersObject[0].items, true, false);
    })
    .catch((error) => {
      console.log(error);
      // alert("Failed to fetch dishes");
    });
}

export function setUpHighlight(){
    let menulist = document.querySelectorAll("#menu ul li");

    menulist.forEach((item)=>{
        item.addEventListener("click",function(){
            menulist.forEach((listitem)=>{
                listitem.classList.remove("highlight");
            })
            item.classList.add("highlight");

            let category = item.getAttribute("value") || item.textContent.trim();
            console.log("highlight category",category);
            displayDishes(category);
        })
    })
} 
window.addEventListener("DOMContentLoaded", setUpHighlight);
