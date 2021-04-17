let desde = 0;
let totalCarrito = 0;
let generadorDeCards = ``;

class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = 2;
  }
  sumaIVA() {
    this.precio = this.precio * 1.21;
  }
  reducirStock() {
    this.stock = this.stock - 1;
  }
  comprobarStock() {
    if (this.stock = 0) {
      alert("No hay stock disponible")
    }
  }
  verProductoEnConsola(){
    console.table(this.nombre, this.precio,)
  }
}
const producto0 =  new Productos("Remera", 750);
const producto1 =  new Productos("Pantalón", 800);
const producto2 =  new Productos("Chomba", 850);
const producto3 =  new Productos("Buzo", 900);
const producto4 =  new Productos("Buzo Canguro", 950);
const producto5 =  new Productos("Campera", 1000);
const producto6 =  new Productos("Campera c/Capucha", 1050);
const producto7 =  new Productos("Pantalón + Buzo", 1100);
const producto8 =  new Productos("Remera + Pantalón + Buzo", 1150);
producto0.verProductoEnConsola();
producto1.verProductoEnConsola();
producto2.verProductoEnConsola();
producto3.verProductoEnConsola();
producto4.verProductoEnConsola();
producto5.verProductoEnConsola();
producto6.verProductoEnConsola();
producto7.verProductoEnConsola();
producto8.verProductoEnConsola();

function agregarAlCarrito(precio) {
      
}
//* Generador de cards a partir del objeto
let tienda = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]
for(let i = 0;  i < tienda.length; i++) {
     generadorDeCards += `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="../img/image${i}.jpg" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">${tienda[i].nombre}</a>
          </h4>
          <h5>$${tienda[i].precio}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          <button onclick="agregarAlCarrito(${tienda[i].precio})">Agregar al carrito</button>
        </div>
      </div>
    </div>`}

    document.getElementById("mercado").innerHTML = generadorDeCards;