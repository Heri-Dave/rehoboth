// Product Benefit Card Accordion - Mobile Only
document.addEventListener('DOMContentLoaded', () => {
  const benefitCards = document.querySelectorAll('.benefit-card');

  benefitCards.forEach((card) => {
    card.addEventListener('click', () => {
      const isExpanded = card.getAttribute('aria-expanded') === 'true';
      
      // Toggle current card
      card.setAttribute('aria-expanded', !isExpanded);
    });
  });
});
