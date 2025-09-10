const person = {
    name: "Tony",
    age: 45,
    key:"Ironman",
}


const { name: Ironmanname, age, key} = person;
// const name = persson.name
// const age = persson.age
// const key = persson.key

console.log({Ironmanname, age, key});



interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank = "Sin rango"}:Hero) =>{
    return{
        keyname :key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

// const contex = useContext(person)

const {
    keyname,
    rank, 
    // user:{name}
    user 
}  = useContext(person)

const{name}= user

console.log(rank, keyname, name)

