
let i=0;
const arrIndex=[`<div><img src="./imgs/blog.png" alt="blog" ></div>
<div class="carruselTitulo">
    <a href="./bocaditos.html"><h1 >Accede a nuestro blog</h1></a>
</div>`,
`<div><img src="./imgs/libro2.png" alt="blog" ></div>
<div class="carruselTitulo">
<a href="./formulario.html">
    <h1>Querés el libro en tus manos?</h1>
</a>
</div>
`];
const arrForm=['./imgs/1.jpg']

/*referencia a las barras laterales */
let arr=document.querySelectorAll(".lateral");
/*referencia al div contendor */
const div2=document.querySelector(".contenedor2");




function handlerMouseOver(){
 
       
       arr[0].style.visibility="visible";
       arr[1].style.visibility="visible";
    
}

function handlerMouseOut(){
    
       let v2=arr[1];
   arr[0].style.visibility="hidden";
    arr[1].style.visibility="hidden";
}

function flecha(b,arreglo){
    /*referencia al contenido */
const divContenido=document.querySelector(".contenido");
    const element=document.createElement("div");
    element.className="contenido";
if(b)
    i++;
else {i--;
     if(i===-1)
       i=arr.length-1;
}    
    i=i%arreglo.length;
console.log(i);
    element.innerHTML=arreglo[i];
 
    div2.replaceChild(element,divContenido);
}








