const divImgsMini=document.getElementById("imgsMini");

for(let i=0;i<carruselForm.arreglo.length;i++) {
    const clon=carruselForm.arreglo[i].cloneNode(true);
    clon.className="imgsMini";
    clon.children[0].id=i;
    divImgsMini.appendChild(clon);
    
}  
   
for(let i=0;document.querySelectorAll(".imgsMini").length;i++){
    document.querySelectorAll(".imgsMini")[i].addEventListener("click",(e)=>{
          console.log("holiz");
          carruselForm.i=e.target.id;
          --carruselForm.i;
          console.log(carruselForm.i);
          flecha(carruselForm,true);
    })
}