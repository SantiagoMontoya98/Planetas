let nombrePlanetas = Array('Tierra','Marte','Jupiter'), distancia = [6,3,'67'];
const tamanio = [10,20,30];
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

nombrePlanetas.forEach((value,index) => {
  console.log('planeta',index,value);
});

/* nombrePlanetas.map((planeta,index) => {
  return(console.log(`El planeta ${planeta} tiene un tamaño de ${tamanio[index]}`));  
}) */

let resultadoMap = nombrePlanetas.map((planeta,index) => {
  return(`El planeta ${planeta} tiene un tamaño de ${tamanio[index]}`); 
});

console.log(resultadoMap);