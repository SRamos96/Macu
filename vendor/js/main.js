let desde = 0;
let precios = [750, 1000, 1350, 1800, 2000, 2300, 2500, 3000, 3500];
let productos = ['Remera', 'Pantalón', 'Chomba', 'Buzo', 'Buzo Canguro', 'Campera', 'Campera c/Capucha', 'Pantalón + Buzo', 'Remera + Pantalón + Buzo'];
let stock = 30;
let acumulador = ``;
let totalCarrito = 0;

for(desde; desde < precios.length; desde++) {
  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
    <a href="#"><img class="card-img-top" src="img/image${desde}.jpg" alt=""></a>
    <div class="card-body">
      <h4 class="card-title">
        <a href="#">${productos[desde]}</a>
      </h4>
      <h5>$${precios[desde]}</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      <button onclick="agregarAlCarrito(${precios[desde]})">Agregar al carrito</button>
    </div>
  </div>
</div>`
}

document.getElementById("destacados").innerHTML = acumulador;

function agregarAlCarrito(precios){
  if (true) {
    totalCarrito += precios;
    alert(`Se agrego un nuevo producto al carrito. El total es: ${totalCarrito}`);
  }
  else {
    alert(`No tenemos stock disponible`);
  }
}
function validadorDeStock(stock) {
  return stock > 0
}