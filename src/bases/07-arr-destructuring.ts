// const characterNumbers =  ['Goku', 'Vegeta', 'Trunks']

// const [, , trunks ] = characterNumbers

// console.log( trunks);

// const returnsArrayFn = ()=>{
//     return ['ABC', 123] as const;
// }

// const [letters, numbers] = returnsArrayFn()

// console.log(letters, numbers);


// TAREA:

// const useState = () => {
//     return["Goku",(a:String) =>{
//         console.log(a);
        
//     } ] as const
// }
// const [name, setName] = useState();

// console.log(name);
// setName("Vegeta")

const useState = (value:String) => {
    return[
        value,
        (newvalue:String) => {
            console.log(newvalue);
            
        }
    ] as const
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
