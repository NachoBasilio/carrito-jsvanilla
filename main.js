import card from "./componentes/card";
import header from "./componentes/header";

const app = document.getElementById("app")

const carrito = []

const figurasPokemon = [
  {
    nombre: "Pikachu",
    precio: 15.99,
    imagen: "pikachu.jpg",
    tipo: "Eléctrico",
    stock: 50,
    generacion: "Primera Generación",
  },
  {
    nombre: "Charizard",
    precio: 24.99,
    imagen: "charizard.jpg",
    tipo: "Fuego/Volador",
    stock: 30,
    generacion: "Primera Generación",
  },
  {
    nombre: "Eevee",
    precio: 12.99,
    imagen: "eevee.jpg",
    tipo: "Normal",
    stock: 60,
    generacion: "Primera Generación",
  },
  {
    nombre: "Mewtwo",
    precio: 29.99,
    imagen: "mewtwo.jpg",
    tipo: "Psíquico",
    stock: 20,
    generacion: "Primera Generación",
  },
  {
    nombre: "Greninja",
    precio: 18.99,
    imagen: "greninja.jpg",
    tipo: "Agua/Siniestro",
    stock: 25,
    generacion: "Sexta Generación",
  },
  {
    nombre: "Lucario",
    precio: 22.99,
    imagen: "lucario.jpg",
    tipo: "Lucha/Acero",
    stock: 40,
    generacion: "Cuarta Generación",
  },
  {
    nombre: "Garchomp",
    precio: 19.99,
    imagen: "garchomp.jpg",
    tipo: "Dragón/Tierra",
    stock: 35,
    generacion: "Cuarta Generación",
  },
  {
    nombre: "Incineroar",
    precio: 21.99,
    imagen: "incineroar.jpg",
    tipo: "Fuego/Siniestro",
    stock: 28,
    generacion: "Séptima Generación",
  },
];

const headerPrincipal = header("1", "PokeTienda")

app.appendChild(headerPrincipal)


figurasPokemon.map(pokemon =>{
  app.appendChild(card(pokemon.nombre,pokemon.precio, pokemon.imagen, pokemon.tipo, pokemon.stock, pokemon.generacion))
})