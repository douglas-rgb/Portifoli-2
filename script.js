const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const header = document.querySelector(".header");

// Alternar tema claro/escuro
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");

  themeToggle.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Alternar menu hamburguer
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Seção de contato

document
  .getElementById("form-contato")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, me chamo ${nome}. Estou interessado no serviço de: ${servico}. Aqui está o que preciso: ${mensagem}`;
    const url = `https://wa.me/5511912824454?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });

// Função para rolar suavemente até o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mostra o botão quando a página é rolada para baixo
window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".btn-scroll-top");
  if (window.scrollY > 100) {
    scrollTopButton.style.display = "flex";
  } else {
    scrollTopButton.style.display = "none";
  }
});
