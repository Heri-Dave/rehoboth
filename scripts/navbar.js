(function () {
  const header = document.querySelector('header');

  const updateHeaderOnScroll = () => {
    const isScrolled = window.scrollY > 40;
    if (!header) return;
    header.classList.toggle('scrolled', isScrolled);
  };

  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll();
})();
