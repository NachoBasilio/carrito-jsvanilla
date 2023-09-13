import card from "./componentes/card";
import header from "./componentes/header";
import "./style.css"

const app = document.getElementById("app")
const contenedorCards = document.createElement("div")
contenedorCards.classList.add("contenedor-mayor")

const carrito = []

const figurasPokemon = [
  {
    nombre: "Pikachu",
    precio: 15.99,
    imagen: "https://mostlygames.com.ar/wp-content/uploads/2022/10/Lumii_20221024_141338930_compress8.jpg",
    tipo: "Eléctrico",
    stock: 50,
    generacion: "Primera Generación",
  },
  {
    nombre: "Charizard",
    precio: 24.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_802278-MLA53074143372_122022-O.webp",
    tipo: "Fuego/Volador",
    stock: 30,
    generacion: "Primera Generación",
  },
  {
    nombre: "Eevee",
    precio: 12.99,
    imagen: "https://i0.wp.com/teknofun-entertainment.com/medias/uploads/2017/07/PK_811242_EEVEE_LED_LAMP_30cm_F_D.jpg?fit=1030%2C1030&ssl=1",
    tipo: "Normal",
    stock: 60,
    generacion: "Primera Generación",
  },
  {
    nombre: "Mewtwo",
    precio: 29.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_650796-MLA48736842491_012022-O.webp",
    tipo: "Psíquico",
    stock: 20,
    generacion: "Primera Generación",
  },
  {
    nombre: "Greninja",
    precio: 18.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_654056-MLM49059106819_022022-O.webp",
    tipo: "Agua/Siniestro",
    stock: 25,
    generacion: "Sexta Generación",
  },
  {
    nombre: "Lucario",
    precio: 22.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_677622-MLM52824609905_122022-O.webp",
    tipo: "Lucha/Acero",
    stock: 40,
    generacion: "Cuarta Generación",
  },
  {
    nombre: "Garchomp",
    precio: 19.99,
    imagen: "https://pbs.twimg.com/media/Ezj96BQXsAUhH_Q.jpg",
    tipo: "Dragón/Tierra",
    stock: 35,
    generacion: "Cuarta Generación",
  },
  {
    nombre: "Incineroar",
    precio: 21.99,
    imagen: "https://m.media-amazon.com/images/I/61UbZXZubQL._AC_UF894,1000_QL80_.jpg",
    tipo: "Fuego/Siniestro",
    stock: 28,
    generacion: "Séptima Generación",
  },
];

const headerPrincipal = header("1", "PokeTienda")

app.appendChild(headerPrincipal)


figurasPokemon.map(pokemon =>{
  contenedorCards.appendChild(card(pokemon.nombre,pokemon.precio, pokemon.imagen, pokemon.tipo, pokemon.stock, pokemon.generacion))
})

app.appendChild(contenedorCards)