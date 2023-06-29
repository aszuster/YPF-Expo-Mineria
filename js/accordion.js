// COMPONENT ACCORDION WITH +

const itemsComp = document.querySelectorAll(".c-accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < itemsComp.length; i++) {
    itemsComp[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}
itemsComp.forEach((item) => item.addEventListener("click", toggleAccordion));
