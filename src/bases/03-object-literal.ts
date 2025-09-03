// 📌 Definición de interfaces
// Person representa una persona con nombre, apellido, edad y dirección
interface Person {
    firstname: string;   // Nombre
    lastname: string;    // Apellido
    age: number;         // Edad
    address: Address;    // Dirección (otro objeto)
}

// Address representa la dirección con código postal y ciudad
interface Address {
    postalCode: string;  // Código postal
    city: string;        // Ciudad
}

// 📌 Creamos un objeto de tipo Person
const ironman: Person = {
    firstname: "Tony",
    lastname: "Stark",
    age: 45,
    address: {
        postalCode: "123abc",
        city: "New York"
    }
}

// Mostramos el objeto ironman en consola
console.log("Ironman:", ironman);

// ----------------------------------------------------------------------
// 📌 Forma 1: Clonar el objeto con spread operator (copia superficial)
// const spiderman = { ...ironman };

// 📌 Forma 2: Clonar el objeto con structuredClone (copia profunda)
const spiderman = structuredClone(ironman);

// Modificamos los datos de spiderman (no afecta a ironman con structuredClone)
spiderman.firstname = "Peter";
spiderman.lastname = "Parker";
spiderman.address.city = "San José";

// Mostramos ambos objetos
console.log("Ironman:", ironman);
console.log("Spiderman:", spiderman);
