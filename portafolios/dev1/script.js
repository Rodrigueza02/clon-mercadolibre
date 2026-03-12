// Script simple para el portafolio

console.log("Portafolio cargado correctamente");

// ejemplo: scroll suave a secciones

document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", function(e){

e.preventDefault();

const destino = document.querySelector(this.getAttribute("href"));

destino.scrollIntoView({
behavior:"smooth"
});

});
});