// 📌 Definimos un arreglo de números
const myArray: number[] = [1, 2, 3, 4];

// ✅ Hacemos una copia del array con spread operator dentro de []
const myArray2 = [...myArray];

// Modificamos la copia agregando un nuevo elemento
myArray2.push(4);

// 📌 Mostramos ambos arrays
console.log("Original:", myArray);   // [1, 2, 3, 4]
console.log("Copia:", myArray2);     // [1, 2, 3, 4, 4]
