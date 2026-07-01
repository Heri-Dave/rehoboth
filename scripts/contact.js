const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
 
  form.addEventListener("submit", function (e) {
    e.preventDefault();
 
    form.style.display = "none";
    success.classList.add("visible");
 
    setTimeout(() => {
      success.classList.remove("visible");
      form.reset();
      form.style.display = "flex";
    }, 3000);
  });