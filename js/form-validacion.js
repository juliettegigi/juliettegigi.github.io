let errores={nombre:true,apellido:true,email:true,dni:true,telefono1:true,telefono2:true};
const boton=document.getElementById("boton");
const t2=document.getElementById("telefono22");


function validar1(e){
   
    const pe=document.getElementById(e.target.name);
switch(e.target.name){
    case "email": 
        if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value))){
            errores['email']="introduzca un correo electrónico válido, por favor"; 
            }
        else{ pe.innerHTML=""
              delete errores["email"];    
    };
        break;
    case "nombre":
    case "apellido":    
        e.target.value=e.target.value.toUpperCase();
        if(!/^[A-ZÁ-ÚÄ-ÜÑ ]+[A-ZÁ-ÚÄ-ÜÑ]$/.test(e.target.value)){
            if(e.target.name==="nombre")
               errores['nombre']="introduzca caracteres válidos , por favor";
            else errores['apellido']="introduzca caracteres válidos , por favor";   
        }
        else {
            e.target.nextElementSibling.innerHTML="";
            if(e.target.name==="nombre")
                delete errores['nombre'];
            else delete errores['apellido']; 
        }
        break;
    case "dni":
        if(!/^[0-9]{7,}$/.test(e.target.value)){
            errores['dni']="introduzca un DNI válido , por favor";
        }
        else {pe.innerHTML="";
              delete errores["dni"]
    };
        break;
    case "telefono1":
        const cArea=[11,221,261,264,266,280,299,342,343,351,362,370,376,379,380,381,383,385,387,388,2901,2920,2954,2966,3543];
        if(undefined=== cArea.find((elemento)=>Number(e.target.value)===elemento)){
           errores["telefono1"]="introduzca un código de área válido , por favor";
           t2.setAttribute("disabled", true);
        }

        else{ pe.innerHTML="";  
            delete errores["telefono1"];
            t2.disabled=false; }
        break;  
        
    case "telefono2":
            const t=document.getElementById("telefono11");
            if( !/^[0-9]$/.test(e.target.value) && (e.target.value+t.value).length!==10  ){
               errores["telefono2"]="introduzca un número válido , por favor";
            }
    
            else{ pe.innerHTML="";  
        delete errores["telefono2"] }
            break;     
}
  
if(Object.keys(errores).length==0){
  
    boton.style.color="green";
    boton.disabled=false;
}
else{
   if( errores[e.target.name]){
    pe.innerHTML=errores[e.target.name];
    pe.style.visibility="visible";
   }
   
boton.style.color="red";
}

    }



function achicarDiv(e){
const id=document.getElementById("identificacion");
const inputs=document.getElementsByTagName("input");
const ps=[];
for(let i=0 ; i<6 ;i++ ){
    const p=document.createElement("p");
    if(i===1 || i===4)
        p.innerHTML=inputs[i].value+" "+inputs[++i].value;
    else
       p.innerHTML=inputs[i].value;
    ps.push(p);
}

while(id.firstChild){
      
  id.removeChild(id.firstChild);
}
for(let i=0 ; i<4 ;i++ ){
  if(i===2)continue;
  id.appendChild(ps[i]);
}


}

