//Animação reval

window.sr = ScrollReveal();

sr.reveal(".secao-titulo", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
});
sr.reveal(".container-fluid", {
  duration: 3000,
  origin: "top",
  distance: "-100px",
});
sr.reveal(".secao", {
  duration: 3000,
  origin: "left",
  distance: "400px",
});
sr.reveal(".secao-portifolio", {
  duration: 3000,
  origin: "bottom",
  distance: "400px",
});
sr.reveal(".navbar-brand", {
  duration: 3000,
  origin: "right",
  distance: "400px",
});
sr.reveal(".grau-conhecimento", {
  duration: 4000,
  origin: "bottom",
  distance: "400px",
});
sr.reveal(".img-perfil", {
  duration: 4000,
  origin: "bottom",
  distance: "400px",
});
sr.reveal(".fa-html5", {
  duration: 3000,
  origin: "top",
  distance: "400px",
});
sr.reveal(".fa-css3-alt", {
  duration: 3000,
  origin: "top",
  distance: "400px",
});
sr.reveal(".fa-bootstrap", {
  duration: 3000,
  origin: "top",
  distance: "400px",
});
sr.reveal(".fa-git-alt", {
  duration: 3000,
  origin: "bottom",
  distance: "400px",
});
sr.reveal(".mov", {
  duration: 3000,
  origin: "bottom",
  distance: "400px",
});
sr.reveal(".fa-database", {
  duration: 3000,
  origin: "bottom",
  distance: "400px",
});
sr.reveal(".img-tamanho", {
  duration: 3000,
  origin: "right",
  distance: "400px",
});
sr.reveal(".tamanho-fonte", {
  duration: 3000,
  origin: "top",
  distance: "400px",
});
sr.reveal(".container-curriculum", {
  duration: 4000,
  origin: "bottom",
  distance: "400px",
});


/****************** Curriculum *******************/
function generatePDF() {
    const element =  document.getElementById("botao-curriculum");
    
    html2pdf()
    .from(element)
    .save();

}
