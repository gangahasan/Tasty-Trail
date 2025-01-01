import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  console.log("clicked");
  event.preventDefault();

  let mobileNumber = form.mobile.value;
  let username = form.username.value;
  let userObj = { username, mobileNumber };

  // if (!/^\d{10}$/.test(mobileNumber)) {
  //     alert('Invalid mobile number. Please enter a 10-digit number.');
  //     return;
  // }
  fetch(`${baseUrl}/users`)
    .then((res) => res.json())
    .then((data) => {

      let user = data.filter((el, i) => el.name === username);
      
      if (user.length != 0) {
        if (user[0].mobile === mobileNumber) {
          alert("login successful");
          localStorage.setItem("loginData", user);
          window.location.href = "menu.html";
        } else {
          alert("Incorrect mobile number. Please try again.");
        }
      } else {
        fetch(`${baseUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then(() => {
            alert("User registered successfully. Order Now.");
            window.location.href = "menu.html";
            form.reset();
          })
          .catch((err) => {
            console.log(err);
            alert("Something went wrong");
          });
      }
    });
});
