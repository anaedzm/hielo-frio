const mas = document.getElementById('mas')
const titulo = document.getElementById('titulo_CatalogHome')
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
  if(document.getElementById('start').classList.contains('active')) {
    document.getElementById('start').classList.remove('active')
  }
  // RESET CLASS of all elements
  if(activeBtnHomeInfo && activeBtnHomeInfo.classList.contains('active')){
      activeBtnHomeInfo.classList.remove('active');}
  
  activeBtnHomeInfo = e.target
  activeBtnHomeInfo.classList.add('active')
  if(i === 1) {
    hideInfo();
    setTimeout(function() {
      document.getElementById('image_CatalogHome').src = 'assets/images/catalogo/basica.png';
      document.getElementById("titulo_CatalogHome").innerHTML = 'BÁSICA';
      document.getElementById("subtitulo_CatalogHome").innerHTML = 'Ideal para que tu negocio <br>sea el más cool.';
      document.getElementById("info_CatalogHome").innerHTML = '<p>Sus dimensiones son tan accesibles que ocupan muy poco espacio dentro de restaurantes pequeños, food courts o cafeterías, incluso puedes instalarla debajo de la barra del bar.</p>'
      + '<p>Haz tu servicio más eficiente sirviendo el hielo directamente de la máquina, al ubicarla cerca de donde se preparan las bebidas.</p>'
      + '<p>De tamaño compacto y fácil manejo, tienes una alta eficiencia en producción de hielo con bajo consumo de energía.</p>'
      showInfo();
    }, 200);
  }

  if(i === 2) {
    hideInfo();
    setTimeout(function() {
      document.getElementById('image_CatalogHome').src = 'assets/images/catalogo/Inter_72.png';
      document.getElementById("titulo_CatalogHome").innerHTML = 'INTERMEDIA';
      document.getElementById("subtitulo_CatalogHome").innerHTML = 'Refresca más de lo que<br> puedes imaginar.';
      document.getElementById("info_CatalogHome").innerHTML = '<p>Su elevado diseño la hace tan eficiente que es perfecta si requieres alta demanda para hoteles, expendios, restaurantes medianos y bares. Produce un excelente tamaño de hielo para enfriar cualquier tipo de bebida.</p>'
      + '<p>Las tenemos disponibles en distintas capacidades y con dispensador opcional.</p>'
      + '<p>Con esta máquina obtienes un alto rendimiento en producción, al mismo tiempo que economizas en consumo de energía.</p>'
      showInfo();
    }, 200);
  }

  if(i === 3) {
    hideInfo();
    setTimeout(function() {
      document.getElementById('image_CatalogHome').src = 'assets/images/catalogo/Premium_72.png';
      document.getElementById("titulo_CatalogHome").innerHTML = 'PREMIUM';
      document.getElementById("subtitulo_CatalogHome").innerHTML = 'La única capaz de congelar<br>tus sentidos.';
      document.getElementById("info_CatalogHome").innerHTML = '<p>Su poderosa estructura y alta potencia la convierten en una extraordinaria opción para comedores industriales, hoteles, restaurantes grandes, expendios y bares.<p>'
      + '<p>Tiene la carga ideal para enfriar hieleras con cervezas y regalarle hielo a los clientes.</p>'
      + '<p>Disponible con una amplia gama de capacidades en producción.</p>'
      + '<p>Altamente eficiente, competitiva y ahorra energía.</p>'
      showInfo();
    }, 200);
  }
    
}

function hideInfo() {
  document.getElementById("titulo_CatalogHome").style.opacity="0";
  document.getElementById("subtitulo_CatalogHome").style.opacity="0";
  document.getElementById("info_CatalogHome").style.opacity="0";
  document.getElementById("titulo_CatalogHome").style.transform="translateY(-20px)";
  document.getElementById("subtitulo_CatalogHome").style.transform="translateY(-20px)";
  document.getElementById("info_CatalogHome").style.transform="translateY(-20px)";
  document.getElementById('image_CatalogHome').style.opacity="0";
  document.getElementById('image_CatalogHome').style.transform="translateY(20px)";
}

function showInfo() {
  document.getElementById("titulo_CatalogHome").style.opacity="1";
  document.getElementById("subtitulo_CatalogHome").style.opacity="1";
  document.getElementById("info_CatalogHome").style.opacity="1";
  document.getElementById("titulo_CatalogHome").style.transform="translateY(0px)";
  document.getElementById("subtitulo_CatalogHome").style.transform="translateY(0px)";
  document.getElementById("info_CatalogHome").style.transform="translateY(0px)";
  document.getElementById('image_CatalogHome').style.opacity="1";
  document.getElementById('image_CatalogHome').style.transform="translateY(0px)";
}

if(mas) {
  mas.onclick = function(){
    switch(titulo.innerHTML.toUpperCase()){
      case 'BÁSICA':
        window.location.href = 'basico.html';
        break;
      case 'INTERMEDIA':
        window.location.href = 'intermedio.html';
        break;
      case 'PREMIUM':
        window.location.href = 'premium.html';
        break;  
    }
  }
}
