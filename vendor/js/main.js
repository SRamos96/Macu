let desde = 0;
let precios = [750, 1000, 1350, 1800, 2000, 2300, 2500, 3000, 3500];
let productos = ['Remera', 'Pantalón', 'Chomba', 'Buzo', 'Buzo Canguro', 'Campera', 'Campera c/Capucha', 'Pantalón + Buzo', 'Remera + Pantalón + Buzo'];
let acumulador = ``;

for(desde; desde < precios.length; desde++) {
  console.log(precios[desde]);
  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
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
    </div>
  </div>
</div>`
}

document.getElementById("destacados").innerHTML = acumulador;