function openMenu() {
  if(document.getElementById('hamburger').classList.contains('open')){
    document.getElementById('hamburger').classList.remove('open')
    document.getElementById('menu-expanded').classList.remove('open')
    document.getElementById('menu-list').classList.remove('open')
  } else {
    document.getElementById('hamburger').classList.add('open')
    document.getElementById('menu-expanded').classList.add('open')
    setTimeout(() => {
      document.getElementById('menu-list').classList.add('open')
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
  
  if(i === 2) {
    // document.getElementById("titulo_CatalogHome").style.opacity="0";
    // setTimeout(function() {
    //   document.getElementById("titulo_CatalogHome").innerHTML = 'Test';
    //   document.getElementById("titulo_CatalogHome").style.opacity="1";
    // }, 200);
  }
    
}

document.getElementById('slides-home-1').onclick = function(){
  window.location.href = 'basico.html';
}