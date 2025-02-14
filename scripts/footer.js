const footer = () => {
  let footer = `
  <div id="footer">
        <div>
            <p>Calorie Statement<br /><br />
              2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary. For allergen information, visit our Special Diets page. We prepare and serve products containing egg, milk, soy, wheat or other allergens.  Our products are prepared on shared equipment and in the same kitchen area and we cannot guarantee that cross contact with allergens will not occur.</p>
            <p>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are registered trademarks of PepsiCo, Inc.
                Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>

            <p>CAPRI-SUN® and the Pouch Shape™ are licensed trademarks of the Capri Sun Group</p>
        </div>

        <div id="logo">
          <a href="./index.html" id="logo"><img src="./assets/chef.png" width="50px" height="50px"/>TastyTrail</a>
        </div>
        <div id="footerbar">
            
            <div id="footerLink">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a> 
            <a href="#">Contact Us</a>
        </div>
        </div>
        <p>&copy; 2024 Tasty Trail. All rights reserved.</p>
    </div>`;
  document.getElementById("footer").innerHTML = footer;
};
footer();
