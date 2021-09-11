document.getElementById("btn-open").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("modal--show");
});
document.getElementById("btn-close").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal--show");
});

// Clicking outside

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("btn-open")) {
    document.querySelector(".modal").classList.add("modal--show");
    return;
  }
  if (document.querySelector(".modal__inner").contains(e.target)) {
    return;
  } else {
    document.querySelector(".modal").classList.remove("modal--show");
  }
});
