const footer = () => {
  let footer = `
        <div id="footerbar">
            <p>&copy; 2024 Tasty Trail. All rights reserved.</p>
            <div id="footerLinks">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a> 
            <a href="#">Contact Us</a>
            </div>

        </div>`;
  document.getElementById("footer").innerHTML = footer;
};
footer();
