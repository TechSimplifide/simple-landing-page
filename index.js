const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  document.querySelector("button").style.display = "none";
  navLinks.classList.toggle("show");
});

let btn = document.querySelector(".theme-toggler");
let bg = true;
btn.addEventListener("click", () => {
  if (bg == true) {
    document.body.style.backgroundColor = "#6b6a6a";
    btn.style.backgroundColor = "#fff"
    document.querySelector("#toggel-img").src = "day-mode.png"
    document.querySelector("#quotes").style.color = "#fff"
    bg = false;
  } else {
    document.body.style.backgroundColor = "";
    btn.style.backgroundColor = "#6b6a6a"
    document.querySelector("#toggel-img").src = "night-mode.png"
    document.querySelector("#quotes").style.color = "black"
    bg = true;
  }
});
