let datosPersonales={email:"",nombres:"",apellidos:"",dni:"",telefono:"",direccion:"",ciudad:""};
let errores={nombre:true,apellido:true,email:true,dni:true,telefono1:true,telefono2:true};

const t2=document.getElementById("telefono22");


function validarDire(e){
    const boton=document.getElementById("boton");
    const pe=document.getElementById(e.target.name);
    if(e.target.value===""){
        pe.style.visibility="visible";
        boton.disabled=true; 
        boton.style.color="red";
    }
    else{pe.style.visibility="hidden";
        boton.style.color="green";
        boton.disabled=false;
    }
      
}

function validar1(e){
    const boton=document.getElementById("boton"); 
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
            if( !(  (/^[0-9]*$/.test(e.target.value)) && 
                    ((e.target.value+t.value).length===10)
                    )  ){
               errores["telefono2"]="introduzca un número válido , por favor";
            }
    
            else{ 
                pe.innerHTML="";  
        delete errores["telefono2"];
    }
            break;     
}
  
if(Object.keys(errores).length==0){ //si no hay errores en el form habilito el botón
  
    boton.style.color="green";
    boton.disabled=false;
}
else{   //sino si el input está mal==> pongo el mensaje de error
   if( errores[e.target.name]){    
    pe.innerHTML=errores[e.target.name];
    pe.style.visibility="visible";
   }
boton.disabled=true;
boton.style.color="red";
}

    }



function achicarDiv(e,id){
const fieldset=document.getElementById(id);
const inputs=fieldset.elements;
const ps=[];
for(let i=0 ; i<inputs.length ;i++ ){
    const p=document.createElement("p");//<p> valor del input</p>
    if(inputs[i].name=="nombre" || inputs[i].name=="telefono1")
       p.innerHTML=inputs[i].value+" "+inputs[++i].value;
    else if(inputs[i].name!=="dni")p.innerHTML=inputs[i].value;   
    ps.push(p);
}

while(fieldset.firstChild){//remuevo todos los hijos del fieldset
      
  fieldset.removeChild(fieldset.firstChild);
}
for(let i=0 ; i<ps.length ;i++ )
  fieldset.appendChild(ps[i]);



if(id==="identificacion"){
    const elemento=document.getElementById("envio");
    elemento.style.display="block";
}

}


function handlerOnSubmit(){
   
   return false;//si retorno false ==> no se recarga la page
}

