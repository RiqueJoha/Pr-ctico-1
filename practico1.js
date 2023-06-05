const divImagen = document.querySelector("#contenedor-imagen");
const selectCantProductos1 = document.querySelector("#muestra-cant");
const selectCantPermitida2 = document.querySelector("#cant-permitida");
const selectColores3 = document.querySelector("#color-selec");
const pResultado1 = document.querySelector("#resultado-1");
const pResultado2 = document.querySelector("#resultado-2");
const pResultado3 = document.querySelector("#resultado-3");



const imgs1 = [
    "https://th.bing.com/th/id/R.ce34903fd1c3b375ff7504b093ba6ed2?rik=ceFhJXsXFhc7Hw&pid=ImgRaw&r=0"]
const imgs2 = [
    "https://th.bing.com/th/id/R.ce34903fd1c3b375ff7504b093ba6ed2?rik=ceFhJXsXFhc7Hw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4cd1237fe7d7db29f538ea76aed03b1a?rik=mCuKoA%2bTqGxT9Q&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.76619886a9d5165cc1a55eb2ed0bcc36?rik=cj2lRmeZAigLNQ&pid=ImgRaw&r=0"]

const imgs3 = [
    "https://th.bing.com/th/id/R.ce34903fd1c3b375ff7504b093ba6ed2?rik=ceFhJXsXFhc7Hw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4cd1237fe7d7db29f538ea76aed03b1a?rik=mCuKoA%2bTqGxT9Q&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.76619886a9d5165cc1a55eb2ed0bcc36?rik=cj2lRmeZAigLNQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.DRY5I2s9uXA0u2UdjwGDBQHaHa?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.02d574fa3ff57dbad79c4c34365be989?rik=4FYVzju6JzmpOg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.3cbdb6a584eee34fe79448bb126f15d9?rik=WIFR%2f82C6%2blpmQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.06HMpjm5Ji1WDmWwnLZQ1AHaHa?pid=ImgDet&rs=1"]
const imgs4 = [
    "https://th.bing.com/th/id/R.ce34903fd1c3b375ff7504b093ba6ed2?rik=ceFhJXsXFhc7Hw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4cd1237fe7d7db29f538ea76aed03b1a?rik=mCuKoA%2bTqGxT9Q&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.76619886a9d5165cc1a55eb2ed0bcc36?rik=cj2lRmeZAigLNQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.DRY5I2s9uXA0u2UdjwGDBQHaHa?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.02d574fa3ff57dbad79c4c34365be989?rik=4FYVzju6JzmpOg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.3cbdb6a584eee34fe79448bb126f15d9?rik=WIFR%2f82C6%2blpmQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.06HMpjm5Ji1WDmWwnLZQ1AHaHa?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.bbc52ae7647b3c4941bb2a072b721a23?rik=wMMS5VlxCRe0GA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.211bca4216eb25757e49fc0eb1a27d6c?rik=oJIFBood0piAlg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.993ab7e0680235101156f339d12278f0?rik=kW4orlSBSBk1EQ&pid=ImgRaw&r=0"]





function generar() {

    let cantidadSeleccionada = selectCantProductos1.value
    let cantidadPermitida = selectCantPermitida2.value
    let colorSeleccionado = selectColores3.value

    actualizaCantSeleccionada(cantidadSeleccionada, cantidadPermitida);


    informaCantPermitida(cantidadPermitida, colorSeleccionado);

    actualizaColorSeleccionado(colorSeleccionado, cantidadPermitida);

}



function actualizaColorSeleccionado(colorSeleccionado, cantidadPermitida) {


    InformaTodasOpcionesColor(colorSeleccionado, cantidadPermitida);

}





/**
 * 
 * @param {number} cantidadSeleccionada-permite elegir cantidades 
 * @param {number} cantidadPermitida -coloca un límite sobre las cantidades elegidas
 * @param {string}actualizaColorSeleccionado-selecciona colores para los productos
 * @param {number}InformaTodasOpcionesColor-relaciona la cantidad elegida con el color seleccionado
 */


function InformaTodasOpcionesColor(colorSeleccionado, cantidadPermitida) {
    switch (colorSeleccionado) {


        case "0":
            pResultado3.innerHTML = ("No hay colores seleccionados");
            break;

        case "1":
            pResultado3.innerHTML = ("Los colores elegidos son: Rojo-Amarillo");

            EligeColor1(cantidadPermitida);

            break;

        case "2":
            pResultado3.innerHTML = ("Los colores elegidos son: Verde-Violeta");

            EligeColor2(cantidadPermitida);

            break;

        case "3":
            pResultado3.innerHTML = ("Los colores elegidos son: Azul-Gris");



            EligeColor3(cantidadPermitida);


    }
}



function EligeColor3(cantidadPermitida) {




    switch (selectCantProductos1.value) {
        case "1":
            divImagen.innerHTML = "";


            for (let i = 0; i < imgs1.length; i++) {


                divImagen.innerHTML += `
                        <fieldset id="color3-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs1[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                       
                        <select name="" id="">
                        <option value="">${cantidadPermitida}</option>
                        </select>
                        <button >Comprar</button>
                        </fieldset>`}

            break;
        case "3":
            divImagen.innerHTML = "";

            for (let i = 0; i < imgs2.length; i++) {

                divImagen.innerHTML += `
                        <fieldset id="color3-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs2[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }


            break;
        case "7":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs3.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color3-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs3[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "10":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs4.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color3-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs4[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }

    }
}

function EligeColor2(cantidadPermitida) {
    
    switch (selectCantProductos1.value) {
        case "1":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs1.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color2-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs1[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "3":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs2.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color2-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs2[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "7":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs3.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color2-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs3[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "10":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs4.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color2-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs4[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }

    }
}

function EligeColor1(cantidadPermitida) {
    switch (selectCantProductos1.value) {
        case "1":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs1.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color1-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs1[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "3":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs2.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color1-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs2[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "7":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs3.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color1-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs3[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }
            break;
        case "10":
            divImagen.innerHTML = "";
            for (let i = 0; i < imgs4.length; i++) {
                divImagen.innerHTML += `
                        <fieldset id="color1-${i + 1}">
                        <h1>Producto ${i + 1}</h1>
                        <img id="img-${i + 1}" src ="${imgs4[i]}" alt = "" > 
                        <p>Seleccione pago:</p>
                        <select name="" id="">
                                    <option value="">Efectivo</option>
                                    <option value="">Debito</option>
                                    <option value="">Crédito</option>
                        </select>
                        <p>Seleccione cantidad:</p>
                        <select name="" id="">
                                <option value="">${cantidadPermitida}</option>  
                        </select>
                        <button >Comprar</button>
                        </fieldset>`;
            }

    }
}

function informaCantPermitida(cantidadPermitida) {


    switch (cantidadPermitida) {
        case "1":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);

            break;
        case "15":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);
            break;
        case "25":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);
            break;
        case "50":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);


    }
}



function actualizaCantSeleccionada(cantidadSeleccionada, cantidadPermitida) {



    switch (cantidadSeleccionada) {



        case "1":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " producto");

            divImagen.innerHTML = "";

            cantidadPermitida="1";

            for (let w = 2; w <= selectCantPermitida2.value; w++) {

                cantidadPermitida += `<option value="">${w}</option>`
            }

            for (let i = 0; i < imgs1.length; i++) {

                divImagen.innerHTML += `
                <fieldset>
                <h1>Producto ${i + 1}</h1>
                <img id="img-${i + 1}" src ="${imgs1[i]}" alt = "" > 
                <p>Seleccione pago:</p>
                <select name="" id="">
                            <option value="">Efectivo</option>
                            <option value="">Debito</option>
                            <option value="">Crédito</option>
                </select>
                <p>Seleccione cantidad:</p>
                <select name="" id="">
                        <option value="">${cantidadPermitida}</option>  
                </select>
                <button >Comprar</button>
                </fieldset>`
            }
            break;

        case "3":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " productos");
            divImagen.innerHTML = "";
            cantidadPermitida = "1";
            for (let w = 2; w <= selectCantPermitida2.value; w++) {

                cantidadPermitida += `<option value="">${w}</option>`
            }

            for (let i = 0; i < imgs2.length; i++) {

                divImagen.innerHTML += `
                <fieldset>
                <h1>Producto ${i + 1}</h1>
                <img id="img-${i + 1}" src ="${imgs2[i]}" alt = "" > 
                <p>Seleccione pago:</p>
                <select name="" id="">
                            <option value="">Efectivo</option>
                            <option value="">Debito</option>
                            <option value="">Crédito</option>
                </select>
                <p>Seleccione cantidad:</p>
                <select name="" id="">
                        <option value="">${cantidadPermitida}</option>  
                </select>
                <button >Comprar</button>
                </fieldset>`;
            }

            break;

        case "7":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " productos");
            divImagen.innerHTML = "";
            cantidadPermitida = "1";
            for (let w = 2; w <= selectCantPermitida2.value; w++) {

                cantidadPermitida += `<option value="">${w}</option>`
            }

            for (let i = 0; i < imgs3.length; i++) {
                divImagen.innerHTML += `
                
                <fieldset>
                <h1>Producto ${i + 1}</h1>
                <img id="img-${i + 1}" src ="${imgs3[i]}" alt = "" >
                <p>Seleccione pago:</p>
                <select name="" id="">
                            <option value="">Efectivo</option>
                            <option value="">Debito</option>
                            <option value="">Crédito</option>
                </select>
                <p>Seleccione Cantidades:</p>
                <select name="" id="">
                            <option value="1">${cantidadPermitida}</option> 
                </select>
                <button >Comprar</button>
                </fieldset>`;
            }
            break;

        case "10":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " productos");
            divImagen.innerHTML = "";
            cantidadPermitida = "1";
            for (let w = 2; w <= selectCantPermitida2.value; w++) {

                cantidadPermitida += `<option value="">${w}</option>`}

            for (let i = 0; i < imgs4.length; i++) {
                divImagen.innerHTML += `
                <fieldset>
                <h1>Producto ${i + 1}</h1>
                <img id="img-${i + 1}" src ="${imgs4[i]}" alt = "" >
                <p>Seleccione pago:</p>
                <select name="" id="">
                            <option value="">Efectivo</option>
                            <option value="">Debito</option>
                            <option value="">Crédito</option>
                </select>
                <p>Seleccione Cantidades:</p>
                <select name="" id="">
                            <option value="">${cantidadPermitida}</option> 
                </select>
                <button >Comprar</button>
                </fieldset>`;
            }
    }
}

