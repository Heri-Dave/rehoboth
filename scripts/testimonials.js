const testimonials = [
    {
      id: 1,
      name: "Amara Osei",
      role: "Beauty Editor, Vogue Africa",
      rating: 5,
      quote: "Rehoboth has completely transformed my hair growth routine. The products are clean, effective, and the results speak for themselves. I can't recommend them enough.",
    },
    {
      id: 2,
      name: "Serena Mensah",
      role: "Dermatologist, Accra Skin Clinic",
      rating: 5,
      quote: "I've been using the herbal hair growth serum for a few months now, and the results are remarkable. I have seen significant improvements in hair density and scalp health. Rehoboth is a game-changer in natural hair care.",
    },
    {
      id: 3,
      name: "Chidinma Adeyemi",
      role: "Content Creator, Lagos",
      rating: 5,
      quote: "Such a product with this much hidden potential deserves to be known by everyone. I've been using the hair growth serum and honestly, I've never been more confident to show off my hair. I highly recommend it to anyone looking for a natural solution to hair loss.",
    },
  ];
 
  let currentIndex = 0;
 
  const starsEl   = document.getElementById("stars");
  const quoteEl   = document.getElementById("quote");
  const nameEl    = document.getElementById("name");
  const roleEl    = document.getElementById("role");
  const dotsEl    = document.getElementById("dots");
 
  function starSVG() {
    return `<svg class="star-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`;
  }
 
  function render() {
    const t = testimonials[currentIndex];
 
    starsEl.innerHTML = Array.from({ length: t.rating }).map(() => starSVG()).join("");
    quoteEl.textContent = `"${t.quote}"`;
    nameEl.textContent  = t.name;
    roleEl.textContent  = t.role;
 
    // Update dots
    dotsEl.querySelectorAll(".dot-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === currentIndex);
    });
  }
 
  // Build dots
  testimonials.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "dot-btn" + (i === 0 ? " active" : "");
    btn.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
    btn.addEventListener("click", () => { currentIndex = i; render(); });
    dotsEl.appendChild(btn);
  });
 
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    render();
  });
 
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    render();
  });
 
  render();