

export default function header(importancia, titulo) {
    const tituloNodo = document.createElement("h" +importancia)

    tituloNodo.innerText = titulo

    return tituloNodo
}
