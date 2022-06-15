const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (evento) => {
    // console.log("Estoy arrastrando el párrafo" + parrafo.innerText);
    parrafo.classList.add("dragging");
    evento.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    evento.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    // console.log("He terminado de arrastrar" + parrafo.innerText);
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    evento.dataTransfer.dropEffect = "move";
    // console.log("Dragover")
  });

  seccion.addEventListener("drop", (evento) => {
    // console.log("Drop")
    const id_parrafo = evento.dataTransfer.getData("id");
    // console.log("Párrafo id: ", id_parrafo)
    const parrafo = document.getElementById(id_parrafo);
    if (seccion === papelera) {
      seccion.appendChild(parrafo);
      parrafo.classList.add("eliminado");
    } else {
      seccion.appendChild(parrafo);
    }
  });
});
