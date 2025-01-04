const navbar = () => {
  let card = `<a href="./index.html" id="logo"><img src="./assets/chef.png" width="50px" height="50px"/>TastyTrail</a>
    <div id="nav-list">
    <a href="./index.html">Home</a>
    <a href="./login.html">Login</a>
    <a href="./menu.html">Menu</a>
    <a href="./cart.html" id="cart">
        <img src="./assets/shopping-cart.png" width="30px" height="30px" alt="Cart Icon" />
        <span id="cart-count">0</span>
      </a>
    <a href="./contact.html"></a>
    <a href="./about.html">About</a>
    </div>`;

  document.getElementById("navbar").innerHTML = card;

  window.addEventListener("DOMContentLoaded", () => {
    setupNavbarHighlight();
    updateCartCount();
  });

  function setupNavbarHighlight() {
    const navLinks = document.querySelectorAll("#nav-list a");
    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        console.log("_001", window.location.href);
        console.log("_002", link.href);
        link.classList.remove("navhighlight");
      }
      link.classList.add("navhighlight");
    });
  }

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const cartCount = cart?.length || 0;
    document.getElementById("cart-count").textContent = cartCount;
  }
};
navbar();
