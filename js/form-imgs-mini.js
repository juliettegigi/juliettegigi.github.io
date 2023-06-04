const divImgsMini=document.getElementById("imgsMini");

for(let i=0;i<carruselForm.arreglo.length;i++) {
    const clon=carruselForm.arreglo[i].cloneNode(true);
    clon.className="imgsMini";
    clon.children[0].id=i;
    divImgsMini.appendChild(clon);
    
}  

const imgs=document.querySelectorAll(".imgsMini");
   
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",(e)=>{
          carruselForm.i=e.target.id;
          --carruselForm.i;
          flecha(carruselForm,true);
    })
}