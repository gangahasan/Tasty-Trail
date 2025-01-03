const navbar = () => {
  let card = `<a href="./index.html" id="logo"><img src="./assets/chef.png" width="50px" height="50px"/>TastyTrail</a>
    <div id="nav-list">
    <a href="./index.html">Home</a>
    <a href="./login.html">Login</a>
    <a href="./menu.html">Menu</a>
    <a href="./cart.html">Cart</a>
    <a href="./about.html">About</a>
    
    </div>`;

  document.getElementById("navbar").innerHTML = card;

  window.addEventListener("DOMContentLoaded", () => {
    setupNavbarHighlight();
  });
  function setupNavbarHighlight() {
    const navLinks = document.querySelectorAll("#nav-list a");

    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("navhighlight");
      } else {
        link.classList.remove("navhighlight");
      }
    });
  }

};
navbar();
