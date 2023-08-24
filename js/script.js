// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

  // Filtra solo strings
  function string(element){
    return typeof element === "string";
  }
  const filteredArray = strangeArray.filter(string);

// Convierte la primera letra de cada string a mayúscula
  const capitalizedArray = filteredArray.map((element) => {
    if (typeof element === "string" && element.length>0){
      return element.charAt(0).toUpperCase() + element.slice(1);
    }
    return element;
  });
// Ordena alfabéticamente 
  const sortedArray = capitalizedArray.slice().sort();

// Muestra el array filtrado, convertido y ordenado  
  showList(sortedArray);
});
  
