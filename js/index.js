// eslint-disable-next-line import/extensions
import { getPersonajes, mataPersonajes } from "./funciones.js";

// Elements del DOM
const botoCarregarPersonatges = document.querySelector(".cargar-personajes");
const botoMatarFamilia = document.querySelector(".matar-familia");
const familia = document.querySelector(".familia");
const missatge = document.querySelector(".mensaje");
const llistaPersonatges = document.querySelector(".personajes");
const plantillaPersonatge = document.querySelector(".personaje-dummy");

// Carregar personatges al clicar el botó carregar
const carregarPersonatges = () => {
  botoCarregarPersonatges.addEventListener("click", async () => {
    const personatges = await getPersonajes();
    pintarLlistaPersonatges(personatges);
  });
};

// Matar personatges
const matarPersonatges = () => {
  botoMatarFamilia.addEventListener("click", async () => {
    try {
      const personatgesMorts = await mataPersonajes(familia.value);
      pintarLlistaPersonatges(personatgesMorts);
    } catch (error) {
      missatge.textContent = error.message;
    }
  });
};

// Pintar llista de personatges
const pintarLlistaPersonatges = (personatges) => {
  buidarLlistaPersonatges();
  for (const personatge of personatges) {
    const personatgeNou = plantillaPersonatge.cloneNode(true);
    personatgeNou.classList.remove("personaje-dummy");
    const nomPersonatge = personatgeNou.querySelector(".nom");
    nomPersonatge.textContent = personatge.nombre;
    const nomFamilia = personatgeNou.querySelector(".nomFamilia");
    nomFamilia.textContent = personatge.familia;
    const estat = personatgeNou.querySelector(".estado");
    estat.textContent = personatge.vivo ? "vivo" : "muerto";
    llistaPersonatges.append(personatgeNou);
  }
};

// Buidar llista de personatges
const buidarLlistaPersonatges = () => {
  for (const personatge of llistaPersonatges.querySelectorAll(".personaje")) {
    personatge.remove();
  }
};

// Main
carregarPersonatges();
matarPersonatges();
