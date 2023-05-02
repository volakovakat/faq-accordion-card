const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
  targetDetail.addEventListener("click", (e) => {
    if (targetDetail.hasAttribute("open")) { // since it's not closed yet, it's open!
      e.preventDefault(); // stop the default behavior, meaning - the hiding
      targetDetail.classList.add("closing"); // add a class which applies the animation in CSS
    }
  });

// when the "close" animation is over
  targetDetail.addEventListener("animationend", (e) => {
    if (e.animationName === "close") {
      targetDetail.removeAttribute("open"); // close the element
      targetDetail.classList.remove("closing"); // remove the animation
    }
  });
});


