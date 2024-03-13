//  Add To Cart Functionality
const cartButtons = document.querySelectorAll(".badgeBox");
const addButtons = document.querySelectorAll(".addToCart");
let count = 1;
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartButtons.forEach((cartButton) => {
      cartButton.textContent = count;
    });
    count++;
  });
});
//  Add To Cart Functionality
//?  Add Here Swiper Js Code

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      890: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  //?  Add Here Swiper Js Code
});

const addToCalendarButton = document.querySelector("#addToCalendarButton");

addToCalendarButton.addEventListener("click", () => {
  // 1. Event Details (Customize as needed)
  const title = "Event Title";
  const startDate = new Date(2024, 3, 8);
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Add 1 hour duration (optional)
  const location = "Online Meeting"; // Optional
  const description = "Optional event description"; // Optional

  // 2. Calendar Invite Link
  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate.toISOString().slice(0, 10)}T${startDate.toTimeString().slice(0, 8)}%2F${endDate.toISOString().slice(0, 10)}T${endDate.toTimeString().slice(0, 8)}&details=${description}&location=${location}`;

  // 3. Event Details for Manual Addition
  const eventDetails = `
    Title: ${title}
    Start Date: ${startDate.toLocaleString()}
    End Date: ${endDate.toLocaleString()}
    Location: ${location}
    Description: ${description}`;

  window.open(calendarLink, "_blank"); // Open calendar link in new tab
  console.log(eventDetails); // Or use clipboard API to copy to clipboard
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".checkout-form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const formData = new FormData(form);
    const formValues = {};

    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    console.log(formValues);
  });
});

//
