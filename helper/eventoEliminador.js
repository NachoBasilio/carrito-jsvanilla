import eventoActualizador from "./eventoActualizador";


export default function eventoEliminador(array, id, nodo) {
    const index = array.findIndex(item => item.id == id);
    console.log(array[1])
    console.log(index)
    
    if (index != -1) {
      const newArray = [...array];
      newArray.splice(index, 1);
      eventoActualizador(newArray, nodo)
    }
    
    console.log(array)
}