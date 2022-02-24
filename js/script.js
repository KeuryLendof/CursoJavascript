//Var genera variables globales y let variables en bloques, es mala practica usar var.


var hola = "Hola Mundo"
let hello = "Hola Mundo"
console.log(hola);
console.log(hello);

console.log("***************var****************")


var musica = "Dembow"
console.log("Musica antes del bloque", musica)
{
    var musica = "Bachata"
    console.log("Musica dentro del bloque", musica)
}
console.log("Musica despues del bloque", musica)

console.log("***************let****************")

let musica2 = "Dembow"
console.log("Musica antes del bloque", musica2)
{
    let musica2 = "Bachata"
    console.log("Musica dentro del bloque", musica2)
}
console.log("Musica despues del bloque", musica2)

console.log("***************const****************")

//Const no puede crear variables vacias. Se utiliza para variables que no vallan a cambiar
// Siempre con valores especificos, en excepcion de Objetos o Arreglos y otros atributos compuestos

const Pi = 3.1416;
console.log(Pi);

// Objetos y Arreglos

const objeto ={
    nombre: "Keury",
    apellido: "lendof",
    edad: 19
}

const colores = ["blanco","negro","azul"]

console.log(objeto)
console.log(colores)

objeto.matricula = "2019-8871"
colores.push("verde")

console.log(objeto)
console.log(colores)

// Cadenas de texto Strings

let nombres = "keury alberto"
let apellidos = "lendof diaz"
let saludo = new String("   Hola como estas   ")

console.log(saludo,
nombres,
apellidos,
nombres.toUpperCase(), // Todo en mayuscula
apellidos.toLowerCase(), // Todo en minuscula
saludo.includes("como"), // Saber si se encuentra esta palabra en el texto
saludo,
saludo.trim() // Quitar espacios en blancos innecesarios, solo alante o atras 
);






//************Concatenacion************

let nombre = 'keury'
let apellido = 'lendof'

let saludo = 'Hola mi nombre es ' + 
nombre + " " + apellido

console.log(saludo);

//Interpolacion de variables
//Template String

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}` //Interpolar datos

console.log(saludo2);


let ul = "<ul> <li>Lunes</li> <li>Martes</li> <li>Miercoles</li> <li>Jueves</li><li>Viernes</li> <li>Sabado</li><li>Domingo</li></ul>"

console.log(ul)

let ul2 = `
<ul>
<li>Lunes</li>
<li>Martes</li>
<li>Miercoles</li>
<li>Jueves</li>
<li>Viernes</li>
<li>Sabado</li>
<li>Domingo</li>
</ul>`;

console.log(ul2)


//************Numeros************

let a = 2;
let b = new Number(3);
let c = 3.1416

console.log(a,b);
console.log(c.toFixed(2)); // Reduccir decimales
console.log(c.toFixed(3));
console.log(parseInt(c)); // Quitar decimales de raiz

console.log(a+b+c);

//Boleanos

let verdadero = true;
let falso = false;

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0));
console.log(Boolean(42));
console.log(Boolean(null));
console.log(Boolean("hola"));
console.log(Boolean(""));



//************Undefined, null & NaN************

/*Undefined indica que no se ha 
inicializado una valiable y que
el valor es ausente*/

let indefinina;
console.log(indefinina)

/*null es un valor especial que 
indica la ausencia de un valor*/

let nulo = null;
console.log(nulo)

/*NaN = Not a Number*/

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero)


//************Funciones************

function estoEsUnaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

function devolverValor(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
    return "La funcion esta retornando una cadena de texto"
}


//************Invocacion de funciones************

let valorFuncion = devolverValor();
estoEsUnaFuncion()
console.log(valorFuncion);

function saludar(nombre,edad){
    console.log(`Hola mi nombre es ${nombre} 
    y tengo ${edad} años.`)
}

saludar("Keury", 19)
saludar()



funcionDeclarada()

function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo")
}

funcionDeclarada()

//Funcion Anonima
const funcionExpresada = function(){
    console.log("Esto es una funcion expresada que esta dentro de una variable" +" "+
    "si invocamos esta funcion antes de su creacion nos dara error.")
}

funcionExpresada()



function saludo(nombre, apellido){
    document.write(`Hola como estas ${nombre} ${apellido} <br>`)
}

saludo("Keury", "Lendof")

let nu1
let nu2

function suma(num1,num2){
    nu1 = num1;
    nu2 = num2;

    //document.write(num1 + num2)
    return nu1 + nu2
}

//suma(20,40)
document.write(suma(50,20))
document.write("<br>")
document.write(suma(1000,340))
document.write("<br>")
document.write("<br>")

function numMax(v1,v2){
    if (v1 > v2){
        return v1
    }
    else{
        return v2
    }
}

document.write("El numero maximo es: " + numMax(20,10))






//************Arrays************

const a = []
const b = [1, true, "hola", ["a","b","c", [1,2,3]]]
console.log(a)
console.log(b)
console.log(b.length)
console.log(b[2]) //Imprimir un elemento del array
console.log(b[3][2])
console.log(b[3][3][1])


const c = Array.of("X","Y","Z",9,3,4)
console.log(c)

const d = Array(30).fill(false)
console.log(d)

const e = new Array(1,2,3,true,false)
console.log(e)

const colores = ["Rojo","Verde","Amarillo","Azul","Morado","Negro"]
console.log(colores)

colores.push("Dorado")
console.log(colores)

colores.pop() // Quita el ultimo elemento
console.log(colores)

colores.forEach(function(col){
    console.log(`<li>${col}</li>`) // imprimir con forma
})

colores.forEach(function(col, index){
    console.log(`<li id = "${index}">${col}</li>`) // imprimir con forma
})





//************Ciclo For************

let nombres = 5

for( i = 0; i <= nombres; i++){
    document.write("Me gusta lo que hago" + "<br>")
}

for( i = 0; i <= 10; i++){
    document.write( i + "<br>")
}

for( i = 0; i <= colores.length; i++){
    document.write( colores[i] + "<br>")
}

for( i = 0; i <= colores.length - 1; i++){
    document.write( colores[i] + "<br>")
}





//************Ciclo While************

let i = 0;

const dias = ["Jueves","Viernes","Sabado","Domingo"]

let num = dias.length - 1

while( i <= num){
    document.write(dias[i] + "<br>")
    i++
}






let elementoP = document.getElementsByTagName("p")
let segundo = document.getElementById("one")

//***********Nodos***********
// 1- crear el elemento
let elemento = document.createElement("h2")
// 2- crear un nodo de texto
let contenido = document.createTextNode("Este es nuestro titular")
// 3- anadir el nodo de textoal elemento
elemento.appendChild(contenido)
// 4- agregar atributos al elemento
elemento.setAttribute("align", "center")
// 5- agregar elemento al documento
document.getElementById("subtitulo").appendChild(elemento)




let elemento = document.createElement("li")
let contenido = document.createTextNode("Nuevo Texto")
let padre = document.getElementsByTagName("li")[0].parentNode
let hijo = document.getElementsByTagName("li")[0]
//let padre = document.getElementById("lista")


elemento.appendChild(contenido)
//document.body.appendChild(elemento)
//padre.appendChild(elemento) // inserta de ultimo
padre.insertBefore(elemento, hijo) // Inserta de primero


//***********Modificar, Remplazar y Eliminar Nodos***********

Modificar
let primerElemento =  document.getElementById("primero")
primerElemento.innerHTML = "Estoy reemplazando el antiguo <i>texto</i>" //Con este accede a todo el contenido html
//primerElemento.textContent = "Estoy reemplazando el antiguo <i>texto</i>"


Remplazar
let elemento = document.createElement("li")
let contenido = document.createTextNode("Nuevo Texto")
let padre = document.getElementsByTagName("li")[0].parentNode
let refer = document.getElementsByTagName("li")[0]

elemento.appendChild(contenido)

padre.replaceChild(elemento, refer)


Eliminar
let elemento = document.createElement("li")
let contenido = document.createTextNode("Nuevo Texto")
let padre = document.getElementsByTagName("li")[0].parentNode
let refer = document.getElementsByTagName("li")[1]

elemento.appendChild(contenido)
padre.removeChild(refer)







//***********Atributos DOM***********

let elemento = document.createElement("div")
let padre = document.getElementById("contenedor")
let refer = document.getElementsByTagName("div")[0]


elemento.setAttribute("class", "rojo")
document.body.appendChild(elemento)
padre.insertBefore(elemento, refer)




//***********Modificando estilos de elementos***********

let encabezado = document.getElementById("encabezado")
encabezado.style.color = "navy"


let a = 2;
let b = new Number(3);
let c = 3.1416

console.log(a,b);
console.log(c.toFixed(2)); // Reduccir decimales
console.log(c.toFixed(3));
console.log(parseInt(c)); // Quitar decimales de raiz

console.log(a+b+c);

//Boleanos

let verdadero = true;
let falso = false;

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0));
console.log(Boolean(42));
console.log(Boolean(null));
console.log(Boolean("hola"));
console.log(Boolean(""));



//************Undefined, null & NaN************

/*Undefined indica que no se ha 
inicializado una valiable y que
el valor es ausente*/

let indefinina;
console.log(indefinina)

/*null es un valor especial que 
indica la ausencia de un valor*/

let nulo = null;
console.log(nulo)

/*NaN = Not a Number*/

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero)


//************Funciones************

function estoEsUnaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

function devolverValor(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
    return "La funcion esta retornando una cadena de texto"
}


//************Invocacion de funciones************

let valorFuncion = devolverValor();
estoEsUnaFuncion()
console.log(valorFuncion);

function saludar(nombre,edad){
    console.log(`Hola mi nombre es ${nombre} 
    y tengo ${edad} años.`)
}

saludar("Keury", 19)
saludar()

let a = 2;
let b = new Number(3);
let c = 3.1416

console.log(a,b);
console.log(c.toFixed(2)); // Reduccir decimales
console.log(c.toFixed(3));
console.log(parseInt(c)); // Quitar decimales de raiz

console.log(a+b+c);

//Boleanos

let verdadero = true;
let falso = false;

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0));
console.log(Boolean(42));
console.log(Boolean(null));
console.log(Boolean("hola"));
console.log(Boolean(""));



//************Undefined, null & NaN************

/*Undefined indica que no se ha 
inicializado una valiable y que
el valor es ausente*/

let indefinina;
console.log(indefinina)

/*null es un valor especial que 
indica la ausencia de un valor*/

let nulo = null;
console.log(nulo)

/*NaN = Not a Number*/

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero)


//************Funciones************

function estoEsUnaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

function devolverValor(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
    return "La funcion esta retornando una cadena de texto"
}


//************Invocacion de funciones************

let valorFuncion = devolverValor();
estoEsUnaFuncion()
console.log(valorFuncion);

function saludar(nombre,edad){
    console.log(`Hola mi nombre es ${nombre} 
    y tengo ${edad} años.`)
}

saludar("Keury", 19)
saludar()

let a = 2;
let b = new Number(3);
let c = 3.1416

console.log(a,b);
console.log(c.toFixed(2)); // Reduccir decimales
console.log(c.toFixed(3));
console.log(parseInt(c)); // Quitar decimales de raiz

console.log(a+b+c);

//Boleanos

let verdadero = true;
let falso = false;

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0));
console.log(Boolean(42));
console.log(Boolean(null));
console.log(Boolean("hola"));
console.log(Boolean(""));



//************Undefined, null & NaN************

/*Undefined indica que no se ha 
inicializado una valiable y que
el valor es ausente*/

let indefinina;
console.log(indefinina)

/*null es un valor especial que 
indica la ausencia de un valor*/

let nulo = null;
console.log(nulo)

/*NaN = Not a Number*/

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero)


//************Funciones************

function estoEsUnaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

function devolverValor(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
    return "La funcion esta retornando una cadena de texto"
}


//************Invocacion de funciones************

let valorFuncion = devolverValor();
estoEsUnaFuncion()
console.log(valorFuncion);

function saludar(nombre,edad){
    console.log(`Hola mi nombre es ${nombre} 
    y tengo ${edad} años.`)
}

saludar("Keury", 19)
saludar()
