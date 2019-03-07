console.log(document);
console.log(document.body);
console.log(document.body.header);

// console.log(document.querySelector('header'));
var header=document.querySelector('header')
console.log(`document.querySelector('.barra nav')`);
console.log(`$(header)`);

var siteHeader=document.querySelector('.siteHeader');
console.log(`$(.siteHeader)`);
console.log('1');

(function () {
  'use strict'
  document.addEventListener('DOMContenedor',function(){
      console.log('2');
  })  
})();

console.log('3');
document.getElementById('barra');

var barra= document.getElementById('barra');
console.log(barra);
//Permite conocer si tiene un atributo llamado clase
console.log(barra.hasAttribute('class'));
//Permite obtener el nombre de la clase;
console.log(barra.getAttribute('class'));
//Cambiar atributos clase el primer parametro es el atributo a cambiar y el otro el nombre
barra.setAttribute('class','barra2');
console.log(barra);
//Seleccionando elementos con la misma clase
var contenedor=document.getElementsByClassName('contenidoPrincipal');
console.log(contenedor[0]);
//Desaparecer el elemento contenedor principal
contenedor[1].style.display="none";
//Seleccionar enlaces
var enlaces = document.getElementsByTagName('a');
console.log(enlaces);
for (const iterator of enlaces) {
    iterator.setAttribute('target','_blank');
}
//Selecciones multiples
var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
console.log(enlacesSidebar);
for (const iterator of enlacesSidebar) {
    iterator.setAttribute('href','http://google.com.co');
}
var enlacesSidebar= document.querySelectorAll('#sidebar .otrasEntradas ul li a');
console.log(enlacesSidebar);
for (const iterator of enlacesSidebar) {
    iterator.setAttribute('href','http://www.google.com.co');
}
var encDos = document.querySelectorAll('h2');
console.log(encDos[1].innerText);
console.log(encDos[1].innerHTML);
//Seleccionando mas de un parametro
var masUno = document.querySelectorAll('h2,footer p');
console.log(masUno);
console.log(masUno);

var enlaces = document.querySelectorAll('a');
console.log(enlaces);
enlaces.forEach(element => {
    console.log(element,innerText);
});
var enlacesMenu = document.querySelectorAll('#nav a')
//Que tipo de nodo es
console.log(enlacesMenu[1].nodeType);
console.log(enlacesMenu[1].nodeName);
//Imprimir todos los articulos de un enlace
console.log(enlacesMenu[1].attributes);
console.log(enlacesMenu[1].attributes)[0];
//Acceder a un al primer enlace
console.log(enlacesMenu[3].firstChild);
console.log(enlacesMenu[3].firstChild.nodeValue);
//Cambiar el contenido del nodo
enlacesMenu[3].firstChild.nodeValue="Contactenos";

//***CLONAR NODO */
var contenido = document.querySelectorAll('main');
var newContenido = contenido[0].cloneNode(true);
var sidebar = document.querySelector('#sidebar');
console.log(sidebar.childNodes);
sidebar.insertBefore(newContenido,sidebar.childNodes[5]);
var sidebar = document.querySelector('aside');
var postVisitados = document.createElement('h2');
var postVisitados = document.createElement('ul');
var textVisitados = document.createTextNode('post más visitados');
postVisitados.appendChildBefore(textVisitados);
sidebar.insertBefore(postVisitados,sidebar.childNodes[0]);
var contenido = document.querySelectorAll('main h2');
console.log(contenido);
contenido.forEach((element,key)=>{
    var nuevoElemento = document.createElement('li');
    var nuevotexto = document.createTextNode(contenido[key]
    .firstChild.nodeValue);
    console.log(nuevotexto);
    nuevoElemento.appendChild(nuevotexto);
    listPost.appendChild(nuevoElemento);
});
sidebar.insertBefore(listPost,sidebar.childNodes[1]);


var primerArticulo = document.querySelector('main article');
console.log(primerArticulo);

//** Eliminar nodos */
var primerArticulo = document.querySelector('main article');
console.log(primerArticulo);
var parent = primerArticulo.parentNode;
console.log(parent);
parent.removeChild(primerArticulo);