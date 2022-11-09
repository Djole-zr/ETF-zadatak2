const tabela = document.querySelector('tbody');
const dugme = document.querySelector('button');


function generisanje (brojRedova, brojKolona) {
    for (let i = 1; i < brojRedova + 1; i++) {
        const noviRed = document.createElement('tr');
        tabela.append(noviRed);
        for (let k = 1; k < brojKolona + 1; k++) {
            const novoPolje = document.createElement('td');
            novoPolje.innerText = `${i},${k}`;
            noviRed.append(novoPolje);
        }
    }
}

function ukloniPrethodnuTabelu(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

dugme.addEventListener('click', function () { 
    ukloniPrethodnuTabelu(tabela);
    const prviBroj = parseInt(document.querySelector('#prvi-broj').value);
    const drugiBroj = parseInt(document.querySelector('#drugi-broj').value);
    generisanje(prviBroj, drugiBroj);
})