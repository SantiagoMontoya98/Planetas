let nombrePlanetas = Array('Tierra','Marte'), distancia = [6,3,'67'];
const tamanio = [];
const objeto = {
  nombre: "Santiago",
  apellido: "Montoya"
}

/* console.log(nombrePlanetas);
console.log(distancia);
console.log(tamanio); */

//for in - Sirve para recorrer la información de objeto o posiciones de un arreglo
for(const key in objeto){
  console.log(key);
}

//for of - Sirve para recorrer la información de arreglos y cadenas de texto
for(const planeta of nombrePlanetas){
  console.log(planeta);
}