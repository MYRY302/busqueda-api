console.log("BIENVENIDOS AL BUSCADOR DE STAR WARS");

const opts = { crossDomain: true}
 
const API = 'https://swapi.co/api/'
const PERSONAS = 'people/:id'
const PLANETAS ='planets/:id'
const ESPECIE = 'species/:id'
var datos = prompt (`ingresa un número del 1-37`);

const personajeurl= `${API}${PERSONAS.replace(':id',datos)}`
$.get(personajeurl, opts, function(personaje){
    console.log(`HOLA MI NOMBRE ES: ${personaje.name} `)

const especie=`${API}${ESPECIE.replace(':id',datos)}`
$.get(especie, opts, function(spe){
    console.log(`DE LA ESPECIE:${spe.name}`)


    const planetUrl= `${API}${PLANETAS.replace(':id',datos)}`
    $.get(planetUrl, opts, function(venus){
        console.log(`MI PLANETA ES: ${venus.name}`)

 

})})
})
