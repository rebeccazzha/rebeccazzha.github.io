const cardFlips = document.querySelectorAll(".card-flip");

cardFlips.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("card-flipped")) {
      card.classList.remove("card-flipped");
      return;
    }

    cardFlips.forEach((innerCard) => {
      innerCard.classList.remove("card-flipped");
    });

    card.classList.add("card-flipped");
  });
});
