const selectCantProductos1 = document.querySelector("#muestra-cant");
const selectCantPermitida2 = document.querySelector("#cant-permitida");
const selectColores3 = document.querySelector("#color-selec");
const pResultado1 = document.querySelector("#resultado-1");
const pResultado2 = document.querySelector("#resultado-2")
const pResultado3 = document.querySelector("#resultado-3")
const imagenes= document.querySelector("#imagen-producto");

IMG_1="https://th.bing.com/th/id/R.160445ef5d67154748cef3379eb03c93?rik=%2b8qrMpOmEl1yJg&pid=ImgRaw&r=0";

function generar() {
    let cantidadseleccionada = selectCantProductos1.value

    switch (cantidadseleccionada) {
        case "1":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadseleccionada + " producto");
            imagenes.src=IMG_1;
            break;
        case "3":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadseleccionada + " productos");
            break
        case "7": 
            pResultado1.innerHTML = ("Seleccionaste " + cantidadseleccionada + " productos");
            break
        case "10":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadseleccionada + " productos");
       
           
    }


}