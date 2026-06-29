const WA_NOTIFY = "https://wa.me/97134375937?text=Hi%2C%20I'd%20like%20to%20be%20notified%20when%20new%20Rehoboth%20products%20launch%21";
 
  const upcoming = [
    {
      id: 1,
      name: "Rehoboth Edge Control Gel",
      category: "Styling",
      teaser: "A firm-hold, frizz-free edge gel enriched with Aloe Vera and Black Castor Oil. No flaking, no residue.",
      eta: "Coming Q3 2026",
      accent: "#6B1A2A",
    },
    {
      id: 2,
      name: "Rehoboth Deep Moisture Mask",
      category: "Treatment",
      teaser: "An intensive weekly hair mask formulated with Shea Butter, Honey, and our signature Herbal Blend for maximum moisture retention.",
      eta: "Coming Q4 2026",
      accent: "#8B4513",
    },
  ];
 
  const bellSVG = `<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
 
  const grid = document.getElementById("upcoming-grid");
 
  upcoming.forEach((p) => {
    const card = document.createElement("div");
    card.className = "upcoming-card";
    card.innerHTML = `
      <div class="card-meta">
        <span class="card-category">${p.category}</span>
        <span class="card-eta">${p.eta}</span>
      </div>
      <div class="card-placeholder">
        <div class="silhouette">
          <div class="silhouette-circle"></div>
          <div class="silhouette-line-long"></div>
          <div class="silhouette-line-short"></div>
        </div>
        <div class="placeholder-overlay">
          <p class="reveal-label">Reveal Soon</p>
        </div>
      </div>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-teaser">${p.teaser}</p>
      <a href="${WA_NOTIFY}" target="_blank" rel="noopener noreferrer" class="card-notify-link">
        ${bellSVG}
        Notify me on WhatsApp
      </a>
    `;
    grid.appendChild(card);
  });