clearInterval(idInterval);
let datosPersonales={email:"",nombre:"",apellido:"",dni:"",telefono1:"",telefono2:"",direccion:"",ciudad:""};
let errores={nombre:true,apellido:true,email:true,dni:true,telefono1:true,telefono2:true};

const t2=document.getElementById("telefono22");


function validarDire(e){
    const boton=document.getElementById("boton2");
    const pe=document.getElementById(e.target.name);
    
    if(!/^[\w,.]+( [.,\w]+)*$/.test(e.target.value)){
        pe.style.visibility="visible";
        boton.disabled=true; 
        //boton.style.color="red";
    }
    else{pe.style.visibility="hidden";
       // boton.style.color="green";
        boton.disabled=false;
        datosPersonales["direccion"]=e.target.value;
        
    }
      
}

function validar1(e){
    const posicionCursor = e.target.selectionStart;
    const boton=document.getElementById("boton1"); 
    const pe=document.getElementById(e.target.name);
switch(e.target.name){
    case "email": 
        if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value))){
            errores['email']="introduzca un correo electrónico válido, por favor"; 
            }
        else{ pe.style.visibility="hidden";
              delete errores["email"];
            };
        break;
    case "nombre":
    case "apellido":    
        e.target.value=e.target.value.toUpperCase();
        if(!/^[A-ZÁ-ÚÄ-ÜÑ]+( [A-ZÁ-ÚÄ-ÜÑ]+)*$/.test(e.target.value))
           errores[e.target.name]="introduzca caracteres válidos , por favor";
        else {
                pe.style.visibility="hidden";
                delete errores[e.target.name]; 
            }
        break;
    case "dni":
        if(!/^[0-9]{7,10}$/.test(e.target.value))
            errores['dni']="introduzca un DNI válido , por favor";
        
        else {pe.style.visibility="hidden";
              delete errores["dni"]
    };
        break;
    case "telefono1":
        const cArea=[11,221,261,264,266,280,299,342,343,351,362,370,376,379,380,381,383,385,387,388,2901,2920,2954,2966,3543];
        if(undefined=== cArea.find((elemento)=>Number(e.target.value)===elemento)){
           errores["telefono1"]="introduzca un código de área válido , por favor";
           t2.setAttribute("disabled", true);
        }

        else{ pe.style.visibility="hidden";
            delete errores["telefono1"];
            t2.disabled=false; }
        break;  
        
    case "telefono2":
            const t=document.getElementById("telefono11");
            if( ! (/^[0-9]*$/.test(e.target.value)))
               errores["telefono2"]="introduzca caracteres numéricos , por favor";
            else if  ((e.target.value+t.value).length!==10)
                errores["telefono2"]="longitud máxima: 10 caracteres(incluído el código de área)";  
           
    
            else{ 
                pe.style.visibility="hidden";  
        delete errores["telefono2"];
    }
            break;     
}
  
if(Object.keys(errores).length==0){ //si no hay errores en el form habilito el botón
    
    boton.disabled=false;
}
else{   //sino si el input está mal==> pongo el mensaje de error
   if( errores[e.target.name]){    
    pe.innerHTML=errores[e.target.name];
    pe.style.visibility="visible";
   }
boton.disabled=true;
}
 
e.target.selectionStart=posicionCursor;
e.target.selectionEnd = posicionCursor;

    }



    function asignarValoresAlform(id,contenidoField1){
        const fieldset=document.getElementById(id);
        fieldset.innerHTML=contenidoField1;
        const inputs=fieldset.elements;
        for(let i=0;i<inputs.length;i++){
          inputs[i].value=datosPersonales[inputs[i].name];
        }

        if(id==="envio"){
            document.getElementById("ciudad").value=datosPersonales.ciudad;
        }
    }
    



function crearContenidoField1(){
    const contenidoField1=`          <legend>Identificación</legend>
    <label>email:
        <input oninput="validar1(event)" type="text" placeholder="info@dominio.com" name="email">
        <p id="email" class="error">ERROR</p>
    </label>
    <label>Nombre/s:
        <input oninput="validar1(event)" type="text" name="nombre">
        <p id="nombre" class="error">ERROR</p>
    </label>
    <label>Apellido/s:
        <input oninput="validar1(event)" type="text" name="apellido" >
        <p id="apellido" class="error">ERROR</p>
    </label>
    <label>DNI:
        <input oninput="validar1(event)" type="text" name="dni">
        <p id="dni" class="error">ERROR</p>
    </label>
    <label class="telefono" for="telefono2" id="h0">Teléfono</label>
    <div id="telefono">
        <label class="telefono" id="h1"><span>Código de área</span>
            <input oninput="validar1(event)" type="text" name="telefono1" id="telefono11">

        </label>
        <label class="telefono" id="h2">
                    <span>Número</span>
            <input oninput="validar1(event)" type="text" name="telefono2" id="telefono22">
            
        </label>        

    </div>
    <p id="telefono1" class="error">ERROR</p>
    <p id="telefono2" class="error">ERROR</p>
    <button type="button" onclick="achicarDiv(event,'identificacion',true)" id="boton1">siguiente</button>
`
  
  asignarValoresAlform("identificacion",contenidoField1)

}


function crearContenidoField2(){
    const contenidoField2=`    <legend>Envío</legend>
    <label>Dirección:
        <input type="text" name="direccion" oninput="validarDire(event)">
        <p id="direccion" class="error">hay caracteres inválidos</p>
    </label>
    <label>Ciudad:
        <select id="ciudad">
           <option value="San Luis" selected>San Luis</option>
           <option value="Mendoza">Mendoza</option>
           <option value="Córdoba">Córdoba</option>
        </select>

    </label>
    <button type="button" disabled  onclick="achicarDiv(event,'envio',true)" id="boton2">siguiente</button>
`
asignarValoresAlform("envio",contenidoField2);


}








function achicarDiv(e,id,b){

    function agregarEvento(btn){
        btn.addEventListener("click",(e)=>{ // click em editar==> cargo el formulario con los datos q se cargaron
            const idButon=document.getElementById(e.target.id);
            const btnEnviar=document.getElementById("btnEnviar");
            btnEnviar.remove();
            if(idButon.id==="btn1"){
               crearContenidoField1();
               document.getElementById("btn2").remove();
            }
            else {crearContenidoField2();
                document.getElementById("btn1").remove();
            }
        })
        
    
    } 


const fieldset=document.getElementById(id);
const inputs=fieldset.elements;
const ps=[];
if(id==="envio")
    datosPersonales["ciudad"]=document.getElementById("ciudad").value;
    
 
for(let i=0 ; i<inputs.length ;i++ ){
    const p=document.createElement("p");//<p> valor del input</p>
    datosPersonales[inputs[i].name]=inputs[i].value;
    if(inputs[i].name=="nombre" || inputs[i].name=="telefono1"){
       p.innerHTML=inputs[i].value+" "+inputs[++i].value;
       datosPersonales[inputs[i].name]=inputs[i].value;
    }
    else p.innerHTML=inputs[i].value;   
    ps.push(p);
}

while(fieldset.children.length!==1){//remuevo todos los hijos del fieldset, todos los inputs
      
  fieldset.removeChild(fieldset.lastChild);
}
for(let i=0 ; i<ps.length ;i++ ) // le pongo los datos ingresados
  fieldset.appendChild(ps[i]);




if(id==="identificacion" && !b){    //habilito el fieldset envio 
    const elemento=document.getElementById("envio");
    elemento.style.display="block";
    document.forms["formulario"]["direccion"].focus();
}

if(id==="envio" || b){  
    //agrego el botón enviar
    const botonEnviar=document.createElement("input");
    botonEnviar.type="submit";
    botonEnviar.value="Enviar";
    botonEnviar.id="btnEnviar";
    document.forms["formulario"].appendChild(botonEnviar);
    //agrego los botones para editar
    const botonEditar1=document.createElement("button");
    botonEditar1.type="button";
    botonEditar1.innerHTML="editar";
    botonEditar1.id="btn1";
    const botonEditar2=document.createElement("button");
    botonEditar2.type="button";
    botonEditar2.innerHTML="editar";
    botonEditar2.id="btn2"; 
    agregarEvento(botonEditar1);
    agregarEvento(botonEditar2);
    const fieldset1=document.getElementById("envio");
    fieldset1.appendChild(botonEditar2);
    const fieldset2=document.getElementById("identificacion");
    fieldset2.appendChild(botonEditar1);
}



}


function handlerOnSubmit(){
    
   console.log(datosPersonales);
   document.getElementById("form").remove();
   const div=document.createElement("div");
   const h=document.createElement("h2");
   const h2=document.createElement("h2");
   h2.innerHTML="🏠 HOME";
   const a=document.createElement("a");
   a.href="./index.html";
   a.appendChild(h2);
   div.appendChild(a);
   h.innerHTML=`Gracias ${datosPersonales.nombre} ${datosPersonales.apellido} , pronto nos comunicaremos con vos 😃`;
   h.classList.add("titulosForm");
   h2.classList.add("titulosForm");
   div.appendChild(h);
   document.getElementById("mensaje").appendChild(div);


   return false;//si retorno false ==> no se recarga la page
}


