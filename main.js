const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

for(let index = 0; index <= accordionItemHeaders.length; index++) {
    accordionItemHeaders[index].addEventListener('click', function() {
    accordionItemHeaders[index].classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    }
    });
  };
