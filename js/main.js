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
function keyBoardPress(keyPress){
  if (keyPress.keyCode === 13){
    console.log('Hi enter key');
  }
}
for(let i = 0; i < acc.length; i++){
  acc[i].addEventListener("keydown",  function(event){
    if(event.keyCode === 13){
      acc[i].classList.toggle('active');
    let panel = acc[i].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    }
    };
    
  })
}

