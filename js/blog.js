let toggle=false;
const objeto={c0:["comentario1","comentario 2"],c1:["comentario 3"]};
let j=2;


function addComentario(event){
    const i=event.target.attributes.name.nodeValue.substring(3);
    objeto[i].push(document.getElementById("t"+i).value);
    const div=document.getElementById(i);
    const nodosHijos=div.childNodes;
    const elementoDiv=document.createElement("div");
    elementoDiv.innerHTML=`<p>${objeto[i][objeto[i].length-1]}
    </p>`;
    elementoDiv.classList.add("contenedorReceta");
    elementoDiv.classList.add("comc");
    div.insertBefore(elementoDiv,nodosHijos[3]);
}


function crearContenido(propiedad){
   let comentarios=objeto[propiedad];
   if(!comentarios){
    objeto[propiedad]=[];
    comentarios=objeto[propiedad];
   }
     
   let ps="";
   for(let i=comentarios.length-1;i>=0;i--){
      ps+=`<div class="contenedorReceta comc"><p>${comentarios[i]}</p></div>`;     
   }
    return `<textarea class="texta" id=${"t"+propiedad} placeholder="ingrese su comentario..."></textarea>
          <button onclick="addComentario(event)" name=${"btn"+propiedad} >agregar</button> 
          ${ps} `; 
}
function mostrarComentarios(e){
    console.log(e);
   if(toggle){
    
    toggle=!toggle;
    document.getElementById(e.target.attributes.name.nodeValue).innerHTML=""; 
    return;
   }
    const c=crearContenido(e.target.attributes.name.nodeValue);
    document.getElementById(e.target.attributes.name.nodeValue).innerHTML=c;
    toggle=!toggle;
}

