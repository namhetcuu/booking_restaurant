$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
let alerShow = false;
setInterval(() => {
  document.title = alerShow ? "NPD Restaurant" : "Nice to meet you";
  alerShow = !alerShow;
}, 1000);
// login
document.getElementById("account").addEventListener("click", function () {
  var Loginform = document.getElementById("login");
  var register = document.getElementById("register");
  if (Loginform.style.display === "none") {
    Loginform.style.display = "block";
  } else {
    Loginform.style.display = "none";
  }
  if (register.style.display === "block") {
    register.style.display = "none";
    Loginform.style.display = "none";
  }
});
// register
document.getElementById("btn_register").addEventListener("click", function () {
  var loginform = document.getElementById("login");
  var register = document.getElementById("register");
  loginform.style.display = "none";
  register.style.display = "block";
});
document.getElementById("btn_login").addEventListener("click", function () {
  alert("Account not exits, please register now...!");
});
