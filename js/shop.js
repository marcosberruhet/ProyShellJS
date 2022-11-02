const marcas = [{nombre: "chevrolet", precioBase: 1000},
                {nombre: "peugeot", precioBase: 1200},
                {nombre: "audi", precioBase: 2000},
                {nombre: "mercedes benz", precioBase: 2500},
                {nombre: "ford", precioBase: 1000   }];

const servicios = [{nombre: "filtro", precioServ: 1000},
                  {nombre: "aceite", precioServ: 500},
                  {nombre: "service completo", precioServ: 5000}];

// ESTO ES CODIGO VIEJO
/*let marcaAuto = prompt("Ingrese la marca de su automovil para poder cotizar.");
    if (marcaAuto != null) marcaAuto = marcaAuto.toLowerCase();
let servicio = prompt("Ingrese servicio a realizar en su automovil. (S para salir)");
    if (servicio != null) servicio = servicio.toLowerCase();

CalcularServicio(marcaAuto, servicio);  
*/

function precioXMarca(automovil){
    const precio = marcas.find((autos)=>autos.nombre == automovil)
    return precio.precioBase;
}


function precioXServicio(servicio){
    const precio = servicios.find((serv) => serv.nombre == servicio)
    return precio.precioServ;
}
/*  //ESTO ES CODIGO VIEJO
function CalcularServicio (marca, serv){
    let precioServicios = 0;
    while((serv != "s") && (marca == "ford" || marca == "chevrolet" || marca == "peugeot" || marca == "audi" || marca == "mercedes benz")){
        precioServicios =  precioServicios +  precioXServicio(serv);
        alert("El SUBTOTAL de su servicio es de "+ (precioServicios + precioXMarca(marca)));
        serv = prompt("Ingrese otro servicio que desee en su automovil. (S para salir)");

    }
    return alert("El precio TOTAL de su servicio es de "+ (precioServicios + precioXMarca(marca)));
}

*/

//  A PARTIR DE ACA INTENTO OBTENER VALOR DE LOS SELECT EN FORMA DINAMICA 

// let opcMarca = document.getElementById("marca");
// opcMarca.addEventListener("change", function() {
//     console.log(opcMarca.value)
// });

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("marca").addEventListener("change", mostrar);
  });

const select = document.getElementById("marca");
const mostrar = () => {
    const indice = select.selectedIndex;
    if(indice === -1) return; // Esto es cuando no hay elementos
    const opcionSeleccionada = select.options[indice];
    console.log(`${opcionSeleccionada.text}`);
};


// document.getElementById("marca").onchange = function () {marcaSel()};
// function marcaSel(){
//       let marca = document.getElementById("marca").value;
//       console.log(marca);
// }

/*
let select = document.getElementById("marca");
select.addEventListener("change",
     function(){
         if (select.value != 0){
            Calcular(select.value);
         }
     }
);
*/

let marca = document.getElementById("marca").value;
let servicio = document.getElementById("servicio").value;
let total = (precioXMarca(marca)) + (precioXServicio(servicio));
let boton = document.getElementById("btnCalcular");

boton.onclick = () =>{
     document.getElementById("lblTotal").innerText = `El total de su servicio es de ${total}`;
};
