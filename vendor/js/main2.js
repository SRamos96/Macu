let desde = 0;
let totalCarrito = 0;
let generadorDeCards = ``;

class Productos {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = Number(stock);
  }
  sumaIVA() {
    this.precio += this.precio * 1.21;
  }
  comprar(){
    this.stock = this.stock -1; 
    console.log(this.stock);
  }
  comprobarStock() {
    if (this.stock == 0) {
      console.log("No tenemos stock de "+ this.nombre)
    }
 
  }
}
const producto0 =  new Productos("Remera", 750, 5);
const producto1 =  new Productos("Pantalón", 800, 2);
const producto2 =  new Productos("Chomba", 850, 2);
const producto3 =  new Productos("Buzo", 900, 0);
const producto4 =  new Productos("Buzo Canguro", 950, 1);
const producto5 =  new Productos("Campera", 1000, 1);
const producto6 =  new Productos("Campera c/Capucha", 1050, 0);
const producto7 =  new Productos("Pantalón + Buzo", 1100);
const producto8 =  new Productos("Remera + Pantalón + Buzo", 1150);

producto0.comprobarStock();
producto1.comprobarStock();
producto2.comprobarStock();
producto3.comprobarStock();
producto4.comprobarStock();
producto5.comprobarStock();
producto6.comprobarStock();

function agregarAlCarrito(precio) {
  totalCarrito += precio;
  alert(`Se agrego un nuevo producto al carrito.`);
  document.getElementById("totalDelCarrito").innerHTML = totalCarrito;
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
    </div>`;
    console.table(tienda[i]);
  }

    document.getElementById("mercado").innerHTML = generadorDeCards;

    function limpiarCarrito(totalCarrito){
      totalCarrito = 0;
      document.getElementById("totalDelCarrito").innerHTML = totalCarrito;
      alert("Se ha limpiado el carrito exitosamente");

    }