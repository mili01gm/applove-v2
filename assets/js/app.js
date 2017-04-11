var fotos = ["Producto 1","Producto 2","Producto 3","Producto 4","Producto 5","Producto 6","Producto 7","Producto 8","Producto 9","Producto 10","Producto 11","Producto 12"];

function newSrc(num){
  return "assets/img/img-"+(num+1)+".jpg"
}

function openModal(param){
  document.getElementById('img01').setAttribute("src",newSrc(param));
  document.getElementById('span01').innerText = fotos[param]
}

function newProduct(elem){
  var div = document.createElement("div");
  div.setAttribute("id","grid-products");
  var aPic = document.createElement("a");
  aPic.setAttribute("href","#modal");
  aPic.setAttribute("class","main-img");
  var pic = document.createElement("img");
  var indice = fotos.indexOf(elem);
  pic.setAttribute("src", newSrc(indice));
  pic.setAttribute("width","320");
  pic.addEventListener("click",openModal(indice));
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
