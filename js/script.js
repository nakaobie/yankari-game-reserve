////////////////////////////////////////////////
////////////////////////////////////////////////
// GALLERY

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery__item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery-filter__item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

////////////////////////////////////////////////
////////////////////////////////////////////////
//ACCORDION

const accordionItemHeaders = document.querySelectorAll(".accordion__header");

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Allows for only one collapsed item at a time
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion__header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    // Collspse an item
    accordionItemHeader.classList.toggle("active");

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Make mobile navigation work

const navBtn = document.querySelector(".navigation__button");
const nav = document.querySelector(".navigation");
const item = document.querySelector(".navigation__list");

navBtn.addEventListener("click", function () {
  nav.classList.toggle("active");

  item.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Video Loop

let vid = document.querySelector(".bg-video");
vid.loop = true;

///////////////////////////////////////////////////////////
