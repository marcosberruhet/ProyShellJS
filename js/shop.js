const marcas = [{nombre: "chevrolet", precioBase: 1000},
                {nombre: "peugeot", precioBase: 1200},
                {nombre: "audi", precioBase: 2000},
                {nombre: "mercedes benz", precioBase: 2500},
                {nombre: "ford", precioBase: 1000   }];

const servicios = [{nombre: "filtro", precioServ: 1000},
                  {nombre: "aceite", precioServ: 500},
                  {nombre: "service completo", precioServ: 5000}];

let marcaAuto = prompt("Ingrese la marca de su automovil para poder cotizar.");
    if (marcaAuto != null) marcaAuto = marcaAuto.toLowerCase();
let servicio = prompt("Ingrese servicio a realizar en su automovil. (S para salir)");
    if (servicio != null) servicio = servicio.toLowerCase();

CalcularServicio(marcaAuto, servicio);  


function precioXMarca(automovil){
    const precio = marcas.find((autos)=>autos.nombre == automovil)
    return precio.precioBase;
}


function precioXServicio(servicio){
    const precio = servicios.find((serv) => serv.nombre == servicio)
    return precio.precioServ;
}

function CalcularServicio (marca, serv){
    let precioServicios = 0;
    while((serv != "s") && (marca == "ford" || marca == "chevrolet" || marca == "peugeot" || marca == "audi" || marca == "Mercedes Benz")){
        precioServicios =  precioServicios +  precioXServicio(serv);
        alert("El SUBTOTAL de su servicio es de "+ (precioServicios + precioXMarca(marca)));
        serv = prompt("Ingrese otro servicio que desee en su automovil. (S para salir)");

    }
    return alert("El precio TOTAL de su servicio es de "+ (precioServicios + precioXMarca(marca)));
}

