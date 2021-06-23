const mas = document.getElementById('mas')
const titulo = document.getElementById('titulo_CatalogHome')
function openMenu() {
  if(document.getElementById('hamburger').classList.contains('open')){
    document.getElementById('hamburger').classList.remove('open')
    document.getElementById('logo').classList.remove('open')
    document.getElementById('menu-expanded').classList.remove('open')
    document.body.style.overflow = "auto"
    document.getElementById('menu-list').classList.remove('open')
  } else {
    document.getElementById('hamburger').classList.add('open')
    document.getElementById('menu-expanded').classList.add('open')
    document.body.style.overflow = "hidden"
    setTimeout(() => {
      document.getElementById('menu-list').classList.add('open')
      document.getElementById('logo').classList.add('open')
    }, 200)
  }
}

function hideMenu() {
  if(window.pageYOffset > 50) {
    document.getElementById("logo").classList.add("active")
  } else {
    document.getElementById("logo").classList.remove("active")
  }
}

window.addEventListener("scroll", hideMenu, false)


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


let mouseCursor
let content
function changeCursor(type) {
  if(mouseCursor) {
    mouseCursor.classList.remove("active")
  }
  
  mouseCursor = document.querySelector("."+type)
  mouseCursor.classList.add("active")
  content = document.getElementById('show-cursor')
  window.addEventListener('mousemove', cursor)

}

function changeCursor2(type) {
  if(mouseCursor) {
    mouseCursor.classList.remove("active")
  }
  
  mouseCursor = document.querySelector("."+type)
  mouseCursor.classList.add("active")
  content = document.getElementById('show-cursor')
  window.addEventListener('mousemove', cursor2)

}

function highlightCursor(e) {
  if(e){
    e.stopPropagation();
  }
    if(mouseCursor){
      mouseCursor.classList.add("highlight")
    }
}

function removeHighlight(e) {
  if(e){
    e.stopPropagation();
  }
    if(mouseCursor){
      if(mouseCursor.classList.contains("highlight")){
        mouseCursor.classList.remove("highlight")
      }
    }
}
    
function hideCursor() {
  if(mouseCursor){
    if(mouseCursor.classList.contains("highlight")){
      mouseCursor.classList.remove("active")  
      mouseCursor.classList.remove("highlight")
    } else {
      mouseCursor.classList.remove("active")  
    } 
  }
  window.removeEventListener('mousemove', cursor)
}

function cursor(e) {
  if(mouseCursor){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  }
}

function cursor2(e) {
  if(mouseCursor){
    mouseCursor.style.top = e.y + "px"
    mouseCursor.style.left = e.x + "px"
  }
}

// function next(div) {
//   document.getElementById(div).scrollIntoView()
// }

// function nextSlide(e, to) {
//   e.target.classList.remove('active')
//   to.classList.add('active')
  
// }