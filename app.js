"use strict";
const buttons = [...document.querySelectorAll("[data-filter]")];
const cards = [...document.querySelectorAll("[data-category]")];
const count = document.querySelector("#resultCount");
function applyFilter(filter) {
  buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === filter)));
  let visible = 0;
  cards.forEach(card => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
    if (!card.hidden) visible++;
  });
  count.textContent = visible + " concepts shown";
}
buttons.forEach(button => button.addEventListener("click", () => applyFilter(button.dataset.filter)));
applyFilter("all");
