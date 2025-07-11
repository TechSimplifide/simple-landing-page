const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

      hamburger.addEventListener("click", () => {
        document.querySelector("button").style.display = "none";
        navLinks.classList.toggle("show");
      });