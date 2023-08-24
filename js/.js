//Arrays
// Para declarar un array vacio
const array = [];

//Agregar elementos al array:
array.push("HOLA!");
array.push(5);
array.push (function (){
    alert("Hola");
});
array.push(
    {
        name: "Nombre",
        lastname: "Apellido",
        age: 20
    }
)

console.log(array);

//Formas para acceder a un Array

//Accedemos a cada elemento del array a través de us índice (comienza desde 0)
console.log(array[3]);

for(let i=0; i< array.length; i++){
    console.log(array[i]);
}

for(let item of array){
    console.log (item);
}

array.forEach(
    (item) => {
        console.log(item);
    }
)

const nuevosArraysFiltrado = array.filter(
    (item) => false
)
console.log(nuevosArraysFiltrado)

const nuevoArray = [];

array.forEach(
    (item) => {
        if(typeof item === "string")
        nuevoArray.push(item)
    }
)

console.log(nuevoArray);

array.splice(1,1);
console.log(array);








