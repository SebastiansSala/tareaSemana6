const alumnos = [
   { nombre: 'Aldo', grado: 1, calificacion: 10 },
   { nombre: 'Beatriz', grado: 2, calificacion: 9 },
   { nombre: 'Carlos', grado: 3, calificacion: 8 },
   { nombre: 'Daniela', grado: 2, calificacion: 7 },
   { nombre: 'Eduardo', grado: 3, calificacion: 6 },
   { nombre: 'Felipe', grado: 1, calificacion: 7 },
   { nombre: 'Gloria', grado: 3, calificacion: 8 },
   { nombre: 'Hector', grado: 2, calificacion: 8 },
   { nombre: 'Ignacio', grado: 2, calificacion: 9 },
   { nombre: 'Jorge', grado: 3, calificacion: 10 },
   { nombre: 'Karla', grado: 1, calificacion: 9 },
   { nombre: 'Laura', grado: 1, calificacion: 7 },
   { nombre: 'Manuel', grado: 3, calificacion: 6 },
   { nombre: 'Nancy', grado: 2, calificacion: 8 },
   { nombre: 'Oscar', grado: 3, calificacion: 8 },
   { nombre: 'Patricia', grado: 1, calificacion: 9 },
   { nombre: 'Quetzalli', grado: 1, calificacion: 9 },
   { nombre: 'Roberto', grado: 3, calificacion: 6 },
   { nombre: 'Samuel', grado: 2, calificacion: 9 },
   { nombre: 'Tania', grado: 1, calificacion: 10 },
   { nombre: 'Ulises', grado: 1, calificacion: 7 },
   { nombre: 'Veronica', grado: 1, calificacion: 8 },
   { nombre: 'Waldo', grado: 1, calificacion: 10 },
   { nombre: 'Yair', grado: 1, calificacion: 10 },
   { nombre: 'Zacarias', grado: 1, calificacion: 10 },
];

const filter = alumnos.filter(list => list.grado === 2);
console.log(filter);

const map = alumnos.map(list => {
    if(list.calificacion < 7){
        return list.calificacion = 7;
    }
    return list.calificacion;
})
console.log(map)

const reduce = map.reduce((acum, list) => {
    acum += list;
    return acum
},0);
console.log(reduce);
