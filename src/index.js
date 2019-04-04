

// import { encode } from "punycode";

//Guardo el boton en la variable
document.getElementById("code").addEventListener("click",()=>{//se llama id del boton para cifrar y se deja en escucha hasta hacer click y al hacer click hara los sigueintes eventos:

    let offset = parseInt(document.getElementById("offset").value); //guarda el numero del offset 
    let text = document.getElementById("message").value.toUpperCase();//guarda el mensaje
    let result = cipher.encode(offset,text);//llama a mi funcion para cifrar y guarda el resultado
    document.getElementById("result").innerHTML =result; //llama al emento con el id resultado para mostrarlo 
  
  });