function greet(name:String):String{
    return `Hola ${name}`;
}

const greet2 = (name:String):String => `Hola ${name}`


const message = greet("Goku")
const message2 = greet2("Vegeta")

console.log(message);
console.log(message2);

interface User {
        uid: String,
        username: String,

    }


function getUser():User{

    return{
        uid: "ABC123",
        username: "Elpapi_23"

    }
}

const getUser2 = ():User=>({
        uid: "ABC123",
        username: "Elpapi_23"

    });


const user = getUser()
const user2 = getUser2()

console.log(user);
console.log(user2);




const myNumbers: number[] =[1,2,3,4,5];

// myNumbers.forEach(function (value){
//     console.log({value});
// })

// myNumbers.forEach( (value) => {
//     console.log(value);
// })

myNumbers.forEach(console.log)



