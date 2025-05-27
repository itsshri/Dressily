// Login Validation 

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "deepthika@gmail.com" && password === "hridhee") {
      alert("Login successful!");
      window.location.href = "Boutique.html"; // Optional redirect
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });


// Cart Counter 

  let cartCount = 0;

  function updateCartDisplay() {
    // Update all cart-count spans
    const cartSpans = document.querySelectorAll('#cart-count');
    cartSpans.forEach(span => {
      span.textContent = cartCount;
    });
  }

  function incrementCart() {
    cartCount++;
    updateCartDisplay();
  }

  function decrementCart() {
    if (cartCount > 0) {
      cartCount--;
      updateCartDisplay();
    }
  }