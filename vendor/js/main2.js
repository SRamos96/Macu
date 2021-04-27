let desde = 0;
let totalCarrito = 0;
let generadorDeCards = ``;

class Productos {
  constructor(nombre, precio, stock, combo) {
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = Number(stock);
    this.combo = combo;
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
const producto0 =  new Productos("Remera", 750, 5, "no");
const producto1 =  new Productos("Pantalón", 800, 2, "no");
const producto2 =  new Productos("Chomba", 600, 2, "no");
const producto3 =  new Productos("Buzo", 900, 0, "no");
const producto4 =  new Productos("Buzo Canguro", 950, 1, "no");
const producto5 =  new Productos("Campera", 2500, 1, "no");
const producto6 =  new Productos("Campera c/Capucha", 1050, 0, "no");
const producto7 =  new Productos("Pantalón + Buzo", 200, "si");
const producto8 =  new Productos("Remera + Pantalón + Buzo", 1000, "si");

producto0.comprobarStock();
producto1.comprobarStock();
producto2.comprobarStock();
producto3.comprobarStock();
producto4.comprobarStock();
producto5.comprobarStock();
producto6.comprobarStock();


const agregarAlCarrito = (precio) => {
  totalCarrito+=precio;
  alert(`Se agrego un nuevo producto al carrito.`);
document.getElementById("totalDelCarrito").innerHTML = totalCarrito;}

//* Generador de cards a partir del objeto
let tienda0 = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

//Se muestra la tienda ordenada por precio de menor a mayor
let tienda = tienda0.sort((a, b) => a.precio - b.precio);

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

    //Desafio Arrays c/filtro
    const filtroCombo = tienda.filter (tienda => tienda.combo == "no");
    console.log(filtroCombo);

    //Desafio Arrays usando sort() ordenando el precio de menor a mayor
    console.log();

    function limpiarCarrito(totalCarrito){
      totalCarrito = [];
      document.getElementById("totalDelCarrito").innerHTML = totalCarrito;
      alert("Se ha limpiado el carrito exitosamente");

    }