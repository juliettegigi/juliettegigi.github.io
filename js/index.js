
const carruselIndex={
    b: true,
    i:0,
    arreglo:[`<div><img src="./imgs/blog.png" alt="blog" ></div>
<div class="carruselTitulo">
    <a href="./bocaditos.html"><h1 >Accede a nuestro blog</h1></a>
</div>`,
`<div><img src="./imgs/libro2.png" alt="blog" ></div>
<div class="carruselTitulo">
<a href="./formulario.html">
    <h1>Querés el libro en tus manos?</h1>
</a>
</div>
`]
}


const carruselForm={
    b: true,
    i:0,
    arreglo:[`<div><img src="./imgs/img001.jpg"></div>`,`<div><img src="./imgs/img003.jpg"></div>`,`<div><img src="./imgs/img004.jpg"></div>`,`<div><img src="./imgs/img005.jpg"></div>`,`<div><img src="./imgs/img006.jpg"></div>`]
}




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

function flecha(obj){
    /*referencia al contenido */
const divContenido=document.querySelector(".contenido");
    const element=document.createElement("div");
    element.className="contenido";
if(obj.b)
    obj.i++;
else {obj.i--;
     if(obj.i===-1)
       obj.i=arr.length-1;
}    
    obj.i=obj.i%obj.arreglo.length;
console.log(obj.i);
    element.innerHTML=obj.arreglo[obj.i];
 
    div2.replaceChild(element,divContenido);
}








