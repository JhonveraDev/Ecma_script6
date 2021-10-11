function newFuction(name,age,country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country  = country || 'MX';
    console.log(name,age,country);
}

//Es6

function newFuction2( name='oscar',age=32,country='MX'){
    console.log(name,age,country);
};

newFuction2();
newFuction2('Jhon','24','COL');

//---------------------------------------

let hello = 'Hello';
let world = 'World';
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase)

//Destructuracion de Elementos ------------------

let person ={
    'name':'Jhon',
    'age':24,
    'country':'Col'
};

console.log(person.name,person.age,person.country)

let {name,age,country} = person;
console.log(person)

//------------------------------
let team1 = ['a','b','c','d'];
let team2 = ['z','x','y','w'];

//propagación
let education = ['ff',...team1,...team2];

console.log(education);

//-----------------------
//Let vs Var

{
    let globalLet = 'Global Let';
    console.log(globalLet)
}

{
    var globalVar = 'Global Bar';
}

console.log(globalVar);

//-----------------------------
//E6 Presentacion en objeto

let name = 'Jhon';
let age = 24;

obj = {name,age};
console.log(obj);


//Promesa----------------
const helloPromise = () =>{
    return new Promise ((resolve,reject)=>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=>console.log('Hola'))
    .catch(error => console.log(error));


class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0; 
    }
    sum(ValueA,valueB){
        this.valueA = ValueA;
        this.valueB = valueB;

        return this.ValueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


function* hello(){
    if(true){
        yield 'Hola';
    }

    if(true){
        yield 'Perros';
    }
}


//ES7---------------
const generatehello = hello();
console.log(generatehello.next().value);
console.log(generatehello.next().value);


let numbers = [1,2,3,4,5,6,7,8];

if(numbers.includes(7)){
    console.log('Se Encuntra el valor 7');
}else{
    console.log('No se Encuentra el valor 7')
}

//ES8---------------

const data = {
    frontend: 'Oscar',
    backend:'Isabel',
    design:'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Oscar',
    backend:'Isabel',
    design:'Ana',
}

const values = Object.values(data)
console.log(values)


const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(7,'Hi'));

const obj = {
    name: 'Alianza',

}


//ASYNC AWAIT

const helloworld = () =>{
    return new Promise((resolve,reject)=>{
        (false)
            ? setTimeout(()=>resolve('Hola Men'),3000)
            : reject(new Error('Test Error'))
    })
};

const HelloAsync = async () =>{
    const hello = await helloworld();
    console.log(hello);
}

HelloAsync();

const anotherFunction = async () => {
    try {
        const hello = await HelloAsync();
        console.log(hello)
    } catch (error) {
        console.log('error')
    }
};

anotherFunction();

//¿Qué se implementó en ES9?
//Propiedades de reposo

const obj = {
    name: 'oscar',
    age:32,
    country:'MX'
};

let {country, ...all} = obj;
console.log(all)


const obj = {
    name: 'Oscar',
    age:32
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)


const helloWorld = () =>{
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Hola jhon Dev'), 3000)
            : reject('Salida')
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));


//¿Qué se implementó en ES10?10/14
//Es10

let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2))

let array = [1,2,3,4,5];
console.log(array.flatMap(value=>[value,value * 2]))

let hello = '                      Hola a Todos';
console.log(hello.trimStart());




