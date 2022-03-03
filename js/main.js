const acc = document.querySelectorAll(".accordion-item-header");

for(let index = 0; index < acc.length; index++) {
    acc[index].addEventListener('click', function() {
    acc[index].classList.toggle('active');
    let panel = acc[index].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    }
    });
  };

  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")
  

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
