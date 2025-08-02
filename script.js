// ===== Typing Animation =====
const typing = document.querySelector(".typing");
const words = ["Data Scientist", "Python Developer", "ML & DL Enthusiast", "AI Explorer"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const currentWord = words[i];
  if (isDeleting) {
    typing.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    typing.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// ===== Scroll Animations =====
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// ===== Modal Functions =====
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300);
}

window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target == modal) {
      closeModal(modal.id);
    }
  });
};

// ===== Dark Mode Toggle =====
const toggle = document.querySelector(".dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
