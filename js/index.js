
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
    i:0,
    arreglo:[]
}
initArreglo();

function initArreglo(){
   /*5 imágenes: tabla de algunos valores nutritivos en gramos
   efectos y orígenes de algunas vitaminas 
   indice alfabético de términos de cocina
   presentación de la buena mesa
   la cristalería
   */
    const arrSrcImg=["./imgs/img001.jpg","./imgs/img003.jpg","./imgs/img004.jpg","./imgs/img005.jpg","./imgs/img006.jpg"];
    for(let i=0; i<arrSrcImg.length;i++){
        const elem1=document.createElement("div");
        const elem2=document.createElement("img");
        elem2.src=arrSrcImg[i];
        elem1.appendChild(elem2);
        carruselForm.arreglo.push(elem1);
        console.log(carruselForm.arreglo[i]);
    }
   
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

function flecha(obj,b){

    /*referencia al contenido */
const divContenido=document.querySelector(".contenido");
    const element=document.createElement("div");
    element.className="contenido";
if(b) /* si b es true==> es la flecha de la derecha */
    obj.i++;
else {obj.i--;
}    
    obj.i=obj.i%obj.arreglo.length;
    if(obj.i<0)
      obj.i=obj.arreglo.length+obj.i;
console.log(obj.i);
obj.arreglo[obj.i].className="carrusel";
    element.appendChild(obj.arreglo[obj.i]);
 
    div2.replaceChild(element,divContenido);
}








