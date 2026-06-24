(function () {
  const header = document.querySelector('header');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const updateHeaderOnScroll = () => {
    const isScrolled = window.scrollY > 40;
    if (!header) return;
    header.classList.toggle('scrolled', isScrolled);
  };

  const toggleMobileMenu = () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  };

  const scrollToSection = (target) => {
    if (!target) return;
    const id = target.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      toggleMobileMenu();
    }
  };

  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll();

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  mobileLinks.forEach((button) => {
    button.addEventListener('click', () => {
      scrollToSection(button.dataset.target);
    });
  });
})();
