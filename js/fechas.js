const fecha = new Date();

document.write(fecha);

console.log("Esta es la hora",fecha.getHours())
console.log("Esta es la hora",fecha.getHours()-12)

console.log("Estos son los minutos",fecha.getMinutes())

console.log("Estos son los segundos",fecha.getSeconds())

console.log("Estos son los milisegundos",fecha.getUTCMilliseconds())

console.log("Dia de la semana",fecha.getDay())
console.log("Dia",fecha.getDate())

console.log("Mes",fecha.getMonth())
console.log("Año",fecha.getFullYear())


