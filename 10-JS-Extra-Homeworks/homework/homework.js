// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let x = 0;
  let array_creado = [];  
  for (let clave in objeto){    
    array_creado[x] = [clave, objeto[clave]];
    x++;
}

return array_creado;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let obj = {};

  for(let i = 0; i < string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 0;
    }  
    obj[string[i]] += 1;
  }

  return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let LetrasMayus = /[A-Z]/g;
  let ArrayMayus = s.match(LetrasMayus);
  for(let i=0; i < ArrayMayus.length;i++) {
      let indx = s.indexOf(ArrayMayus[i]);
      s = s.substring(0,indx)+s.substring(indx+1,s.length);
  }
  s = ArrayMayus.join("")+s;
  
  return s;

}

String.prototype.reverse = function() {
  var x = this.length;
  var cadenaInvertida = "";

 while (x>=0) {
  cadenaInvertida = cadenaInvertida + this.charAt(x);
  x--;
}
return cadenaInvertida;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var split = str.split(" ");
 
  for(let i=0; i < split.length;i++) {   
    split[i] = split[i].reverse();
}

  return split.join(" ");

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroReversed = numero.toString();
  numeroReversed = numeroReversed.split("").reverse().join("");

  if(numero.toString() === numeroReversed )
  {
    return 'Es capicua';
  }
  else
  {
    return 'No es capicua';
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var expresion = /[A-C]/gi;
  var array_emparejamientos = cadena.match(expresion);
 
  if(array_emparejamientos!=null)
  {
  for(let i=0; i < array_emparejamientos.length;i++) {
      let indx = cadena.indexOf(array_emparejamientos[i]);
      cadena = cadena.substring(0,indx)+cadena.substring(indx+1,cadena.length);
  }
}

  return cadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort(function(a, b) {
    return a.length - b.length;
  });

  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  return Array.from(new Set([...arreglo1].filter(e => new Set(arreglo2).has(e))));

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

