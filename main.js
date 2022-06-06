let ingredientes = ["harina", "levadura", "sal", "azucar", "aceite", "AguaTibia", "mozzarela", "tomate", "morrón", "jamón"]


function parImpar(lista) {
    let par = [];
    let impar = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length % 2 === 0) {
            par.push(lista[i])
        }
        else if (lista[i].length % 2 === 1) {
            impar.push(lista[i])
        }
    }
    console.log(` los ingredientes pares son ${par}`)
    console.log(` los ingredientes impares son ${impar}`)
}

parImpar(ingredientes)





