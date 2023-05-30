let ultimoC="c71";
let toggle=false;
const objeto={c0:["comentario1","comentario 2"],
              c1:["comentario 3"]};
let j=2;





function crearContenido(idDiv){
   //recibo el id del div en donde tengo que colocar los comentarios que están en el objeto
   let comentarios=objeto[idDiv];
   if(!comentarios){
    objeto[idDiv]=[];
    comentarios=objeto[idDiv];
   }
     
// creo un textArea
   const textArea=document.createElement("textarea");
   textArea.id="t"+idDiv;
   textArea.placeholder="ingrese su comentario...";
   textArea.classList.add("texta");
// creo un boton
   const boton=document.createElement("button");
   boton.addEventListener("click",function (event){
                textArea.value=textArea.value.trim();
             if(textArea.value!=""){
              const i=event.target.name.substring(3);
              objeto[i].push(document.getElementById("t"+i).value);             
              const elementoDiv=document.createElement("div");
              elementoDiv.innerHTML=`<p>${objeto[i][objeto[i].length-1]}</p>`;
              elementoDiv.classList.add("contenedorReceta");
              elementoDiv.classList.add("comc");
              boton.insertAdjacentElement("afterend",elementoDiv);
             }
            
             
            }
);
boton.name="btn"+idDiv;
boton.innerHTML="Agregar";
   

// creo un contenedor, va a contener el textarea y al botón y todos los comentarios
  const contenedor=document.createElement("div");
  contenedor.appendChild(textArea);
  contenedor.appendChild(boton);

   for(let i=comentarios.length-1;i>=0;i--){
     const div=document.createElement("div");
     div.classList.add("contenedorReceta");
     div.classList.add("comc");
     const p=document.createElement("p");
     p.innerHTML= comentarios[i];
     div.appendChild(p);
    contenedor.appendChild(div);    
   }

   
  return contenedor;


}
function mostrarComentarios(e){
    const idDiv=e.target.attributes.name.nodeValue;
   if(toggle){
    
    toggle=!toggle;
    //el ícono de comentarios tiene el evento click y tiene un name asociado a un div
    document.getElementById(idDiv).innerHTML=""; 
    return;
   }
   // creo el contenido del div , le paso el id del div
    const c=crearContenido(idDiv);
    document.getElementById(idDiv).appendChild(c);
    // focus al text area
    document.getElementById("t"+idDiv).focus();
    toggle=!toggle;


}

