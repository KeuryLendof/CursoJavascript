 //<!-- Evento click -->
        // const parrafo = document.querySelector('p');
        // const boton = document.querySelector('button');

        // let contador = 0;

        // boton.addEventListener('click', () =>{  //esto es una funcion anonima
        //     console.log("click");
        //     contador++;
        //     parrafo.textContent = contador;
        // });

        //<!-- Evento Change -->
        // const parrafo = document.querySelector('p');
        // const input = document.querySelector('input');

        // input.addEventListener('change', (e) => {
        //     parrafo.textContent = e.target.value;
        // });


        //<!-- Evento Mouse -->
        const bloque = document.querySelector(".bloque");

        bloque.addEventListener("mouseenter", () => {
            bloque.style.backgroundColor = 'red';
        });

        bloque.addEventListener("mouseleave", () => {
            bloque.style.backgroundColor = 'blue';
        })