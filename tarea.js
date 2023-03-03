const objArr = [
    {nombre: 'Juan', edad: 64},
    {nombre: 'Pedro', edad: 9},
    {nombre: 'Pablo', edad: 50},
    {nombre: 'Manuel', edad: 29},
    {nombre: 'Sebastian', edad: 39},
    {nombre: 'Alan', edad: 40},
    {nombre: 'Axel', edad: 29},
    {nombre: 'Daniel', edad: 14},
    {nombre: 'Angel', edad: 19},
    {nombre: 'Romeo', edad: 10},
    {nombre: 'Pablo', edad: 12},
    {nombre: 'Saul', edad: 95},
    {nombre: 'Ramiro', edad: 24},
    {nombre: 'Juan', edad: 42},
    {nombre: 'Juan', edad: 12},
];

// FILTER IMPERATIVO
const filterImperativo = () => {
    let newArr = [];
    for(let i = 0; i < objArr.length; i++){
        if(objArr[i].edad > 18){
            newArr.push(objArr[i])
        }
    }
    return newArr;
}
console.log(filterImperativo());
//FILTER FUNCIONAL
const filter = objArr.filter((list) => list.edad > 18);
console.log(filter)

//MAP IMPERATIVO
const mapImperativo = () => {
    let newArr = [];
    for(let i = 0; i < objArr.length; i++){
        let persona = { 
            nombre: objArr[i].nombre,
            edad: objArr[i].edad*2
        }
        newArr.push(persona)
    }
    return newArr;
}
console.log(mapImperativo());
//MAP FUNCIONAL
const map = objArr.map(list => ({
    nombre: list.nombre,
    edad: list.edad*2
}));
console.log(map)
