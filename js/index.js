/*Animação reval*/

window.sr = ScrollReveal();

sr.reveal(".container-descricao-img", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".paragrafo-profissional", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".icon-hobbie", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".paragrafo-tecnologia", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});



sr.reveal(".hero-img", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-img-perfil", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".secao-titulo", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".paragrafo-hobbie", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-icon", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".paragrafo-hobbie", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-paragrafo", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-videos", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".descricao-por", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".container-rodape", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".container-redesociais", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".contato1", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".contato2", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".contato3", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});


/****************** Curriculum *******************/
function generatePDF() {
    const element =  document.getElementById("botao-curriculum");
    
    html2pdf()
    .from(element)
    .save();

}

window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});