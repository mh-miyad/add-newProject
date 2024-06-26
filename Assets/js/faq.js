const accordionItemHeaders = document.querySelectorAll(
  ".faq-accordion-item-header"
);
// const accordionItemIcons = document.querySelectorAll(".faq-accordion-btn-icon");
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemIcons = accordionItemHeader.querySelectorAll(
      ".faq-accordion-btn-icon"
    );

    accordionItemIcons.forEach((accordionItemIcon) => {
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemIcon.classList.add("active-btn");
        accordionItemIcon.style.transform = "rotate(180deg)";
      } else {
        accordionItemIcon.style.transform = "rotate(0deg)";
      }
    });

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
