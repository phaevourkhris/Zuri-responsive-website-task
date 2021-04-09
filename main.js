const navLinks = document.querySelector(".nav-links");
const hamburger = document.getElementById("hamburger");
const hamburgerStyle = getComputedStyle(hamburger);

hamburger.onclick = () => {
  if (navLinks.style.display === "") {
    navLinks.style.display = "block";
    window.addEventListener("resize", adjustMenu);
  } else if (navLinks.style.display === "block"){
    navLinks.style.display = "";
    window.addEventListener("resize", adjustMenu);
  }
};

function adjustMenu(){
    let windowWidth = window.innerWidth;
    if(windowWidth > 760 && navLinks.style.display === "block"){
      navLinks.style.display ="flex";
    }
    else if(windowWidth > 760 && navLinks.style.display === ""){
      navLinks.style.display = "";
    }
    else if(windowWidth < 760 && navLinks.style.display === "flex"){
      navLinks.style.display ="block";
    }
}

