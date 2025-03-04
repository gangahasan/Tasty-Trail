import { baseUrl } from "./baseUrl.js";
import { displayMenu } from "./displayMenu.js";

let currentCategory = "BURGERS"; // Track selected category
let currentItems = []; // Store products for sorting

// Fetch and display products initially
window.onload = () => displayDishes(currentCategory);

function displayDishes(category) {
  currentCategory = category; // Update selected category

  fetch(`${baseUrl}/dishes`)
    .then((response) => response.json())
    .then((products) => {
      let categoryObject = products.find((el) => el.title === category);
      if (!categoryObject) {
        console.log("No such dish found");
        return;
      }

      currentItems = categoryObject.items; // Store data for sorting

      let dishescont = document.getElementById("dishescont");
      dishescont.innerHTML = ""; // Clear previous content

      let title = document.createElement("h2");
      title.textContent = category;
      dishescont.appendChild(title);

      displayMenu(currentItems, true, false); // Show products
    })
    .catch((error) => console.log(error));
}

// Function to extract numeric price from a string (₹ symbol included)
function extractPrice(priceStr) {
  let match = priceStr.match(/\d+(\.\d{1,2})?/); // Extract numbers from price
  return match ? parseFloat(match[0]) : 0; // Convert to number
}

// Function to sort and display products
function sortDishes(order) {
  let sortedItems = [...currentItems]; // Copy array for sorting

  if (order === "H-L") {
    sortedItems.sort((a, b) => extractPrice(b.price) - extractPrice(a.price)); // High to Low
  } else if (order === "L-H") {
    sortedItems.sort((a, b) => extractPrice(a.price) - extractPrice(b.price)); // Low to High
  }

  displayMenu(sortedItems, true, false); // Update display
}

// Ensure the sort dropdown works correctly
document.addEventListener("DOMContentLoaded", () => {
  let sortDropdown = document.querySelector(".sortOption");
  if (sortDropdown) {
    sortDropdown.addEventListener("change", (event) => {
      sortDishes(event.target.value); // Apply sorting
    });
  }
});

// Set up category highlighting and fetch respective products
export function setUpHighlight() {
  let menulist = document.querySelectorAll("#menu ul li");

  menulist.forEach((item) => {
    item.addEventListener("click", function () {
      menulist.forEach((listitem) => listitem.classList.remove("highlight"));
      item.classList.add("highlight");

      let category = item.getAttribute("value") || item.textContent.trim();
      console.log("Selected category:", category);
      displayDishes(category); // Fetch and show new category
    });
  });
}

window.addEventListener("DOMContentLoaded", setUpHighlight);
