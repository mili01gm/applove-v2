var fotos = ["Producto 1","Producto 2","Producto 3","Producto 4","Producto 5","Producto 6","Producto 7","Producto 8","Producto 9","Producto 10","Producto 11","Producto 12"];
var modal = document.getElementById('modal');
function newSrc(num){
  return "assets/img/img-"+(num+1)+".jpg"
}

function newProduct(elem){
  var div = document.createElement("div");
  div.setAttribute("id","grid-products");
  var aPic = document.createElement("a");
  aPic.setAttribute("class","main-img");
  var pic = document.createElement("img");
  var indice = fotos.indexOf(elem);
  pic.setAttribute("src", newSrc(indice));
  pic.setAttribute("width","320");
  pic.addEventListener("click",function(e){
    e.preventDefault();
    var modal = document.getElementsByClassName('modal')[0];
    var scroll = document.getElementById('toogle');
    document.getElementById("img01").setAttribute("src",this.src);
    modal.style.display = "block";
    scroll.setAttribute("class","hidden");
    if(modal.style.display == "block"){
      document.getElementById('close').addEventListener("click",function(e){
        modal.style.display = "none";
        scroll.removeAttribute("class");
      });
    }
  });
  var span = document.createElement("span");
  span.setAttribute("class","main-span nb-0");
  span.innerText = fotos[indice]

  aPic.appendChild(pic);
  div.appendChild(aPic);
  div.appendChild(span);

  return div;
}

window.addEventListener("load",function(){
  var products = document.getElementById("products");
  var show = fotos.forEach(function(e){
    products.appendChild(newProduct(e));
  });
  return show;
});
