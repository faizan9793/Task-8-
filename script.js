// script.js
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    alert("Message sent successfully!");
    
    
    this.reset();
    
    
    document.getElementById("formMessage").textContent = "Thanks! We'll get back to you soon.";
  });

