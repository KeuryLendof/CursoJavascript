const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty')

addBtn.addEventListener('click', (e) => {
    e.preventDefault(); //Esto hace que no se recargue la pagina

    const text = input.value;

    if(text !== ''){

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = ""; //Para que el input quede vacio

        empty.style.display = "none";
    }

});

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement; // Este el el que elimina
        ul.removeChild(item);

        const items = document.querySelectorAll('li');//Esto chequea si hay listas

        if(items.length == 0){
            empty.style.display = "block";
        }

    })

    return deleteBtn;
}