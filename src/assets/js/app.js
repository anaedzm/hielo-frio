function openMenu() {
  if(document.getElementById('hamburger').classList.contains('open')){
    document.getElementById('hamburger').classList.remove('open')
    document.getElementById('logo').classList.remove('open')
    document.getElementById('menu-expanded').classList.remove('open')
    document.getElementById('menu-list').classList.remove('open')
  } else {
    document.getElementById('hamburger').classList.add('open')
    document.getElementById('menu-expanded').classList.add('open')
    setTimeout(() => {
      document.getElementById('menu-list').classList.add('open')
      document.getElementById('logo').classList.add('open')
    }, 200)
  }
}
let activeBtnHomeInfo
function changeHomeCatalog(i, e) {

  // RESET CLASS of all elements
  if(activeBtnHomeInfo && activeBtnHomeInfo.classList.contains('active')){
      activeBtnHomeInfo.classList.remove('active');}
  
  activeBtnHomeInfo = e.target
  activeBtnHomeInfo.classList.add('active')
  if(i === 1) {
    document.getElementById("titulo_CatalogHome").style.opacity="0";
    document.getElementById("subtitulo_CatalogHome").style.opacity="0";
    document.getElementById("info_CatalogHome").style.opacity="0";
    setTimeout(function() {
      document.getElementById("titulo_CatalogHome").innerHTML = 'BÁSICA';
      document.getElementById("subtitulo_CatalogHome").innerHTML = 'Ideal para que tu negocio <br>sea el más cool.';
      document.getElementById("info_CatalogHome").innerHTML = '<p>Sus dimensiones son tan accesibles que ocupan muy poco espacio dentro de restaurantes pequeños, food courts o cafeterías, incluso puedes instalarla debajo de la barra del bar.</p>'
      + '<p>Haz tu servicio más eficiente sirviendo el hielo directamente de la máquina, al ubicarla cerca de donde se preparan las bebidas.</p>'
      + '<p>De tamaño compacto y fácil manejo, tienes una alta eficiencia en producción de hielo con bajo consumo de energía.</p>'
      document.getElementById("titulo_CatalogHome").style.opacity="1";
      document.getElementById("subtitulo_CatalogHome").style.opacity="1";
      document.getElementById("info_CatalogHome").style.opacity="1";
    }, 200);
  }

  if(i === 2) {
    document.getElementById("titulo_CatalogHome").style.opacity="0";
    document.getElementById("subtitulo_CatalogHome").style.opacity="0";
    document.getElementById("info_CatalogHome").style.opacity="0";
    setTimeout(function() {
      document.getElementById("titulo_CatalogHome").innerHTML = 'INTERMEDIA';
      document.getElementById("subtitulo_CatalogHome").innerHTML = 'Refresca más de lo que<br> puedes imaginar.';
      document.getElementById("info_CatalogHome").innerHTML = '<p>Su elevado diseño la hace tan eficiente que es perfecta si requieres alta demanda para hoteles, expendios, restaurantes medianos y bares. Produce un excelente tamaño de hielo para enfriar cualquier tipo de bebida.</p>'
      + '<p>Las tenemos disponibles en distintas capacidades y con dispensador opcional.</p>'
      + '<p>Con esta máquina obtienes un alto rendimiento en producción, al mismo tiempo que economizas en consumo de energía.</p>'
      document.getElementById("titulo_CatalogHome").style.opacity="1";
      document.getElementById("subtitulo_CatalogHome").style.opacity="1";
      document.getElementById("info_CatalogHome").style.opacity="1";
    }, 200);
  }

  if(i === 3) {
    document.getElementById("titulo_CatalogHome").style.opacity="0";
    document.getElementById("subtitulo_CatalogHome").style.opacity="0";
    document.getElementById("info_CatalogHome").style.opacity="0";
    setTimeout(function() {
      document.getElementById("titulo_CatalogHome").innerHTML = 'PREMIUM';
      document.getElementById("subtitulo_CatalogHome").innerHTML = 'La única capaz de congelar<br>tus sentidos.';
      document.getElementById("info_CatalogHome").innerHTML = '<p>Su poderosa estructura y alta potencia la convierten en una extraordinaria opción para comedores industriales, hoteles, restaurantes grandes, expendios y bares.<p>'
      + '<p>Tiene la carga ideal para enfriar hieleras con cervezas y regalarle hielo a los clientes.</p>'
      + '<p>Disponible con una amplia gama de capacidades en producción.</p>'
      + '<p>Altamente eficiente, competitiva y ahorra energía.</p>'
      document.getElementById("titulo_CatalogHome").style.opacity="1";
      document.getElementById("subtitulo_CatalogHome").style.opacity="1";
      document.getElementById("info_CatalogHome").style.opacity="1";
    }, 200);
  }
    
}

document.getElementById('slides-home-1').onclick = function(){
  window.location.href = 'basico.html';
}