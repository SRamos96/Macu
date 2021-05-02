const contenedorProductos = document.getElementById('mercado');
const selectConjunto = document.getElementById('selectConjunto');
const selectPrecios = document.getElementById('selectPrecios');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const carrito = [];


class Productos {
  constructor(nombre, precio, stock, combo, img) {
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = Number(stock);
    this.combo = combo;
    this.img = img;
  }
}

const producto0 = new Productos("Remera", 750, 5, "no", 0);
const producto1 = new Productos("Pantalón", 800, 2, "no", 1);
const producto2 = new Productos("Chomba", 600, 2, "no", 2);
const producto3 = new Productos("Buzo", 900, 0, "no", 3);
const producto4 = new Productos("Buzo Canguro", 950, 1, "no", 4);
const producto5 = new Productos("Campera", 2500, 1, "no", 5);
const producto6 = new Productos("Campera c/Capucha", 1050, 0, "no", 6);
const producto7 = new Productos("Pantalón + Buzo", 200, 1, "si", 7);
const producto8 = new Productos("Remera + Pantalón + Buzo", 1000, 1, "si", 8);

let tienda0 = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

function generarProductos(array) {
  contenedorProductos.innerHTML = '';
  array.forEach((tienda0) => {
    const div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.classList.add('col-md-6');
    div.classList.add('mb-4');
    div.innerHTML = `
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="../img/image${tienda0.img}.jpg" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${tienda0.nombre}</a>
        </h4>
        <h5>$${tienda0.precio}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        <button onclick="agregarAlCarrito('${tienda0.nombre}')">Agregar al carrito</button>
      </div>
    </div>`;
    contenedorProductos.appendChild(div);

  });
}
generarProductos(tienda0);

function filtrar() {
  let valorFiltroConjunto = selectConjunto.value;
  let valorFiltroPrecios = selectPrecios.value;

  let arrayFiltrado = [];

  if (valorFiltroConjunto == '0') {
    arrayFiltrado = tienda0
  } else {
    arrayFiltrado = tienda0.filter(el => el.combo == selectConjunto.value);
  }
  if (valorFiltroPrecios == 0) {
    arrayFiltrado = arrayFiltrado
  } else if (valorFiltroPrecios == 1) {
    arrayFiltrado = arrayFiltrado.filter(el => el.precio <= 1000);
  } else {
    arrayFiltrado = arrayFiltrado.filter(el => el.precio <= 2000);
  }


  generarProductos(arrayFiltrado);
}

function agregarAlCarrito(nombre) {
  let productoElegido = tienda0.find(el => el.nombre == nombre);
  carrito.push(productoElegido);

  localStorage.setItem('carrito', JSON.stringify(carrito));

  console.log(carrito);

  actualizarCarrito();
}

function eliminarProducto(nombre) {
  let productoAEliminar = carrito.find(el => el.nombre == nombre);
  let indice = carrito.indexOf(productoAEliminar);

  carrito.splice(indice, 1);
  console.log(carrito);
  actualizarCarrito();
}

function actualizarCarrito() {
  contenedorCarrito.innerHTML = '';
  const carritoSinDuplicado = [...new Set(carrito)];

  carritoSinDuplicado.forEach((producto) => {
    const div = document.createElement('div');
    const itemCarrito = tienda0.filter((nombre)=>{
      return tienda0.nombre === parseInt(nombre);
    });
    const numeroUnidadesItem = carrito.reduce((total, nombre)=>{
      return nombre === producto ? total += 1 : total;
    },0);

    div.classList.add('d-flex');
    div.classList.add('justify-content-between');
    div.classList.add('align-items-center'); 
    div.innerHTML = `
    <li class="d-flex align-items-center">${producto.nombre}</li>
    <li class="d-flex align-items-center">Cantidad: ${numeroUnidadesItem}</li>
    <li class="d-flex align-items-center">Precio: $${producto.precio}</li>
    <button onclick=eliminarProducto(${producto.id}) class="btn btn-danger"><i class="fas fa-minus-square"></i></button>
`
contenedorCarrito.appendChild(div);
  })
}

selectConjunto.addEventListener('change', () => {
  filtrar()
})
selectPrecios.addEventListener('change', () => {
  filtrar()
})