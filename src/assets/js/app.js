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

(function() {
  var follower, init, mouseX, mouseY, positionElement, printout, timer;

  follower = document.getElementById('follower');

  printout = document.getElementById('printout');

  mouseX = (event) => {
    return event.clientX;
  };

  mouseY = (event) => {
    return event.clientY;
  };

  positionElement = (event) => {
    var mouse;
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    follower.style.top = mouse.y + 'px';
    return follower.style.left = mouse.x + 'px';
  };

  timer = false;

  window.onmousemove = init = (event) => {
    var _event;
    _event = event;
    return timer = setTimeout(() => {
      return positionElement(_event);
    }, 1);
  };

}).call(this);
let mouseCursor
let content
function changeCursor(type) {
  mouseCursor = document.querySelector("."+type)
  mouseCursor.classList.add("active")
  content = document.getElementById('show-cursor')
  window.addEventListener('mousemove', cursor)

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
  mouseCursor.style.top = e.pageY + "px"
  mouseCursor.style.left = e.pageX + "px"
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBOztFQUFBLFFBQUEsR0FBVyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4Qjs7RUFDWCxRQUFBLEdBQVcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEI7O0VBRVgsTUFBQSxHQUFTLENBQUMsS0FBRCxDQUFBLEdBQUE7QUFDUCxXQUFPLEtBQUssQ0FBQztFQUROOztFQUdULE1BQUEsR0FBUyxDQUFDLEtBQUQsQ0FBQSxHQUFBO0FBQ1AsV0FBTyxLQUFLLENBQUM7RUFETjs7RUFHVCxlQUFBLEdBQWtCLENBQUMsS0FBRCxDQUFBLEdBQUE7QUFDbEIsUUFBQTtJQUFFLEtBQUEsR0FBUTtNQUNOLENBQUEsRUFBRyxNQUFBLENBQU8sS0FBUCxDQURHO01BRU4sQ0FBQSxFQUFHLE1BQUEsQ0FBTyxLQUFQO0lBRkc7SUFJUixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQWYsR0FBcUIsS0FBSyxDQUFDLENBQU4sR0FBVTtXQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLElBQWYsR0FBc0IsS0FBSyxDQUFDLENBQU4sR0FBVTtFQU5oQjs7RUFRbEIsS0FBQSxHQUFROztFQUNSLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLElBQUEsR0FBTyxDQUFDLEtBQUQsQ0FBQSxHQUFBO0FBQzVCLFFBQUE7SUFBRSxNQUFBLEdBQVM7V0FDVCxLQUFBLEdBQVEsVUFBQSxDQUFXLENBQUEsQ0FBQSxHQUFBO2FBQ2pCLGVBQUEsQ0FBZ0IsTUFBaEI7SUFEaUIsQ0FBWCxFQUVOLENBRk07RUFGa0I7QUFsQjVCIiwic291cmNlc0NvbnRlbnQiOlsiZm9sbG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sbG93ZXInKVxucHJpbnRvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRvdXQnKVxuXG5tb3VzZVggPSAoZXZlbnQpID0+XG4gIHJldHVybiBldmVudC5jbGllbnRYXG5cbm1vdXNlWSA9IChldmVudCkgPT5cbiAgcmV0dXJuIGV2ZW50LmNsaWVudFlcblxucG9zaXRpb25FbGVtZW50ID0gKGV2ZW50KSA9PlxuICBtb3VzZSA9IHtcbiAgICB4OiBtb3VzZVgoZXZlbnQpXG4gICAgeTogbW91c2VZKGV2ZW50KVxuICB9XG4gIGZvbGxvd2VyLnN0eWxlLnRvcCA9IG1vdXNlLnkgKyAncHgnXG4gIGZvbGxvd2VyLnN0eWxlLmxlZnQgPSBtb3VzZS54ICsgJ3B4J1xuXG50aW1lciA9IGZhbHNlXG53aW5kb3cub25tb3VzZW1vdmUgPSBpbml0ID0gKGV2ZW50KSA9PlxuICBfZXZlbnQgPSBldmVudFxuICB0aW1lciA9IHNldFRpbWVvdXQgPT5cbiAgICBwb3NpdGlvbkVsZW1lbnQoX2V2ZW50KVxuICAsIDEiXX0=
//# sourceURL=coffeescript
