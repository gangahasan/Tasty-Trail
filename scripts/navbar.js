const navbar = () => {
  let card = `<a href="./index.html" id="logo"><img src="./assets/chef.png" width="50px" height="50px"/>TastyTrail</a>
    <div id="nav-list">
    <a href="./login.html">Login</a>
    <a href="./Menu.html">Menu</a>
    <a href="./cart.html">Cart</a>
    <a href="./about.html">About</a>
    
    </div>`;

  document.getElementById("navbar").innerHTML = card;
};
navbar();