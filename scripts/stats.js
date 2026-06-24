(function () {
  const statValues = document.querySelectorAll('.stat-value');

  function countUp(element, target, duration = 2200) {
    let start = 0;
    const step = target / (duration / 16);
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      start += step;

      if (start >= target) {
        element.textContent = target.toLocaleString();
      } else {
        element.textContent = Math.floor(start).toLocaleString();
        requestAnimationFrame(animate);
      }
    }

    animate();
  }

  function observeStats() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target, 10);
            countUp(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    statValues.forEach((stat) => observer.observe(stat));
  }

  observeStats();
})();

