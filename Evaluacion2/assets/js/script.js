const disfraces = [
    {
        tipo: "venta",
        titulo: "Disfraz Original de Cucaracha para Adulto",
        precio: 10000,
        estado: "Usado",
        detalles: ["Tela de Algodón", "Sin Accesorios", "Talla M Adulto"],
        img: "/assets/img/cucaracho.webp"
    },
    {
        tipo: "venta",
        titulo: "Disfraz Elfos Navideños",
        precio: 20000,
        estado: "Usado",
        detalles: ["Paño Lenci", "Incluye Zapatos, Gorro y Cinturón", "Talla S, M y L Adulto"],
        img: "/assets/img/elfos.webp"
    },
    {
        tipo: "venta",
        titulo: "Disfraz Jocker",
        precio: 20000,
        estado: "Usado",
        detalles: ["Poliester", "Incluye corbata", "Talla 14 y 16"],
        img: "/assets/img/jocker.webp"
    },
    {
        tipo: "arriendo",
        titulo: "Disfraz de Jack y Sally (Pareja)",
        precio: 46000,
        estado: "20% Dcto. con pago en efectivo",
        detalles: ["Tela de Poliéster", "Sin Accesorios", "Todas las tallas"],
        img: "/assets/img/jack y sally.webp"
    },
    {
        tipo: "arriendo",
        titulo: "Disfraz Maléfica",
        precio: 35000,
        estado: "20% Dcto. con pago en efectivo",
        detalles: ["Tela de Algodón", "Cintillo cuernos", "Talla S, M y L Adulto"],
        img: "/assets/img/malefica.webp"
    },
    {
        tipo: "arriendo",
        titulo: "Disfraz Merlina",
        precio: 30000,
        estado: "20% Dcto. con pago en efectivo",
        detalles: ["Tela de Tul y Poliester, No incluye zapatos", "Talla S, M y L Adulto"],
        img: "/assets/img/merlina.jpg"
    }
];

function generarTarjetas(disfraces, tipo) {
    return disfraces
        .filter(disfraz => disfraz.tipo === tipo)
        .map(disfraz => `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${disfraz.img}" class="card-img-top" alt="${disfraz.titulo}" />
                    <div class="card-body">
                        <h5 class="card-title">${disfraz.titulo}</h5>
                        <p><i class="fa-solid fa-shirt"></i> ${disfraz.detalles[0]}</p>
                        <p><i class="fa-solid fa-glasses"></i> ${disfraz.detalles[1]}</p>
                        <p><i class="fa-solid fa-ruler"></i> ${disfraz.detalles[2]}</p>
                        <p><i class="fas fa-dollar-sign"></i> ${disfraz.precio.toLocaleString()}</p>
                        <p class="text-info"><i class="fa-regular fa-star-half-stroke"></i> ${disfraz.estado}</p>
                    </div>
                </div>
            </div>
        `).join("");
}

function cargarContenido() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <section id="venta">
            <h2>Disfraces en Venta</h2>
            <div class="row">
                ${generarTarjetas(disfraces, "venta")}
            </div>
        </section>
        <hr />
        <section id="arriendo">
            <h2>Arriendo de Disfraces</h2>
            <div class="row">
                ${generarTarjetas(disfraces, "arriendo")}
            </div>
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", cargarContenido);
