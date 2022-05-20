




const linkContent = document.querySelectorAll(".linkcontent");

linkContent.forEach((el) => {
    el.addEventListener("click", function () {
      document.querySelectorAll(".popular__items").forEach((el) => {
        el.classList.add("d-none");
      });
      linkContent.forEach((el) => {
        el.classList.remove("active-category");
        el.classList.remove("btn--primary");
      });
  
      el.classList.add("active-category");
      el.classList.add("btn");
      let classTarget = document.querySelector(
        `.${el.getAttribute("data-target")}`
      );
      classTarget.classList.remove("d-none");
    });
  });
  



 