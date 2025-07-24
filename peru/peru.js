document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".inner-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    
    });
  });
  document.addEventListener("click", (event) => {
  const allCards = document.querySelectorAll(".inner-card");
  if (!event.target.closest(".card")) {
    allCards.forEach(card => 
        card.classList.remove("flipped"));
  }
});
});




