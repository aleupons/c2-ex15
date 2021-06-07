// eslint-disable-next-line import/extensions
import { getPersonajes, mataPersonajes } from "./funciones.js";

// Elements del DOM
const botoCarregarPersonatges = document.querySelector(".cargar-personajes");
const botoMatarFamilia = document.querySelector(".matar-familia");
const familia = document.querySelector(".familia");
const missatge = document.querySelector(".mensaje");

// Carregar personatges al clicar el botó carregar
const carregarPersonatges = () => {
  botoCarregarPersonatges.addEventListener("click", async () => {
    const personatges = await getPersonajes();
    buidarLlistaPersonatges();
    pintarLlistaPersonatges();
    console.log(personatges);
    return personatges;
  });
};

// Matar personatges
const matarPersonatges = () => {
  botoMatarFamilia.addEventListener("click", async () => {
    try {
      const personatgesMorts = await mataPersonajes(familia.value);
      console.log(personatgesMorts);
      return personatgesMorts;
    } catch (error) {
      missatge.textContent = error;
    }
  });
};

// Pintar llista de personatges
const pintarLlistaPersonatges = () => {};

// Buidar llista de personatges
const buidarLlistaPersonatges = () => {};

// Main
carregarPersonatges();
matarPersonatges();
