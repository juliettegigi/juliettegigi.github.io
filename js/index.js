
const elementosCarruselIndex={
    img:["./imgs/blog.png", "./imgs/libro2.png"],
    alt:["blog","blog"],
    href:["./bocaditos.html","./formulario.html"],
    h1:["Accede a nuestro blog","Querés el libro en tus manos?"]

}

const carruselIndex={
    b: true,
    i:0,
    arreglo:[]
}
/*<div>
     <img src="./imgs/blog.png" alt="blog" >
  </div>
  <div class="carruselTitulo">
    <a href="./bocaditos.html">
        <h1 >Accede a nuestro blog</h1>
        </a>
  </div>`,
 */
function initArregloCarruselIndex(){
    for(let i=0;i<elementosCarruselIndex.img.length;i++){
        const div0=document.createElement("div");
        const div1=document.createElement("div");
        const img=document.createElement("img");
        img.id="imgc1";
        const div2=document.createElement("div");
        const a=document.createElement("a");
        const h1=document.createElement("h1");
        img.src=elementosCarruselIndex.img[i];
        img.alt=elementosCarruselIndex.alt[i];
        div1.appendChild(img);
        div2.className="carruselTitulo";
        a.href=elementosCarruselIndex.href[i];
        console.log("asas",a.href);
        h1.innerHTML=elementosCarruselIndex.h1[i];
        a.appendChild(h1);
        div2.appendChild(a);
        div0.appendChild(div1);
        div0.appendChild(div2);
        carruselIndex.arreglo.push(div0);
    }
   
    

}

initArregloCarruselIndex();

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


let idInterval=setInterval(()=>{flecha(carruselIndex,true)},5000)








