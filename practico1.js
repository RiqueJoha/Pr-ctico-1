
const divResultado = document.querySelector("#resultados");
const divProductos = document.querySelector("#muestra-products");
const divimagen = document.querySelector("#contenedor-imagen");
const selectCantProductos1 = document.querySelector("#muestra-cant");
const selectCantPermitida2 = document.querySelector("#cant-permitida");
const selectColores3 = document.querySelector("#color-selec");
const pResultado1 = document.querySelector("#resultado-1");
const pResultado2 = document.querySelector("#resultado-2");
const pResultado3 = document.querySelector("#resultado-3");






function generar() {

    let cantidadSeleccionada = selectCantProductos1.value
    let cantidadPermitida = selectCantPermitida2.value
    let colorSeleccionado = selectColores3.value


    switch (cantidadSeleccionada) {

        case "1":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " producto");

            divimagen.innerHTML = "";

            const imgs1 = [
                "https://cdn-icons-png.flaticon.com/512/2674/2674505.png"];

            for (let i = 0; i < imgs1.length; i++) {
             
                divimagen.innerHTML += `
                <fieldset>
                <h1>Producto ${i+1}</h1>
                <img id="img-${i + 1}" src ="${imgs1[i]}" alt = "" > 
                <p>Seleccione pago:</p>
                <select name="" id="">
                            <option value="">Efectivo</option>
                            <option value="">Debito</option>
                            <option value="">Crédito</option>
                </select>
                <p>Seleccione cantidad:</p>
                <select name="" id="">
                        <option value="1">${cantidadPermitida}</option>  
                </select>
                <button >Comprar</button>
                </fieldset>`;
                }
            break;

        case "3":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " productos");
            divimagen.innerHTML = "";

            const imgs2 = [
                "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
                "https://i.pinimg.com/originals/fd/0b/43/fd0b43c215fc4d57f081386a9f77b5a9.png",
                "https://st4.depositphotos.com/11953928/24778/v/450/depositphotos_247786442-stock-illustration-supermarket-products-cartoon.jpg"]

            for (let i = 0; i < imgs2.length; i++) {
                divimagen.innerHTML += `
                <fieldset>
                <h1>Producto ${i + 1}</h1>
                <img id="img-${i + 1}" src ="${imgs2[i]}" alt = "" >
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
            break

        case "7":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " productos");
            divimagen.innerHTML = "";

            const imgs3 = [
                "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
                "https://i.pinimg.com/originals/fd/0b/43/fd0b43c215fc4d57f081386a9f77b5a9.png",
                "https://st4.depositphotos.com/11953928/24778/v/450/depositphotos_247786442-stock-illustration-supermarket-products-cartoon.jpg",
                "https://thumbs.dreamstime.com/z/korgpicknicksymbol-116223312.jpg",
                "https://th.bing.com/th/id/R.711dad5b8a1d5177174fbb45c238396d?rik=o9djzgLOunL93Q&pid=ImgRaw&r=0",
                "https://th.bing.com/th/id/R.69845c33b1ea25e0529aa07b6de4aa84?rik=b5leUHVyWvn8fw&pid=ImgRaw&r=0",
                "https://thumbs.dreamstime.com/b/sistema-del-icono-del-vector-de-los-productos-l%C3%A1cteos-58372668.jpg",]

            for (let i = 0; i < imgs3.length; i++) {
                divimagen.innerHTML += `
                
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
            break

        case "10":
            pResultado1.innerHTML = ("Seleccionaste " + cantidadSeleccionada + " productos");
            divimagen.innerHTML = "";

            const imgs4 = [
                "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
                "https://i.pinimg.com/originals/fd/0b/43/fd0b43c215fc4d57f081386a9f77b5a9.png",
                "https://st4.depositphotos.com/11953928/24778/v/450/depositphotos_247786442-stock-illustration-supermarket-products-cartoon.jpg",
                "https://thumbs.dreamstime.com/z/korgpicknicksymbol-116223312.jpg",
                "https://th.bing.com/th/id/R.711dad5b8a1d5177174fbb45c238396d?rik=o9djzgLOunL93Q&pid=ImgRaw&r=0",
                "https://th.bing.com/th/id/R.69845c33b1ea25e0529aa07b6de4aa84?rik=b5leUHVyWvn8fw&pid=ImgRaw&r=0",
                "https://thumbs.dreamstime.com/b/sistema-del-icono-del-vector-de-los-productos-l%C3%A1cteos-58372668.jpg",
                "https://cdn4.vectorstock.com/i/1000x1000/95/83/food-products-icon-vector-28759583.jpg",
                "https://th.bing.com/th/id/OIP.5fNY8Xh3Ub4x8Bmpr5nkzwHaD4?pid=ImgDet&rs=1",
                "https://thumbs.dreamstime.com/z/iconos-de-los-productos-de-limpieza-del-vector-esponja-y-el-lavarse-56614059.jpg"]

            for (let i = 0; i < imgs4.length; i++) {
                divimagen.innerHTML += `
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
                            <option value="1">${cantidadPermitida}</option> 
                </select>
                <button >Comprar</button>
                </fieldset>`; 
            }

    }

    switch (cantidadPermitida) {
        case "1":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);

            break;
        case "15":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);
            break
        case "25":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);
            break
        case "50":
            pResultado2.innerHTML = ("La cantidad permitida es:" + cantidadPermitida);


    }

    switch (colorSeleccionado) {

        case "0":
            pResultado3.innerHTML = ("No hay colores seleccionados");
             break

        case "1":
            pResultado3.innerHTML = ("Los colores elegidos son: Rojo-Amarillo");
            divimagen.style.background= "rgb(224, 144, 144)";
            break

        case "2":
            pResultado3.innerHTML = ("Los colores elegidos son: Verde-Violeta");
            divimagen.style.background= "rgb(57, 194, 114)";
            break

        case "3":
            pResultado3.innerHTML = ("Los colores elegidos son: Azul-Gris");
            divimagen.style.background= "rgb(139, 139, 218)";

    }
}
