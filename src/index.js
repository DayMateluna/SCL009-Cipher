

// import { encode } from "punycode";

//Guardo el boton en la variable
document.getElementById("code").addEventListener("click",()=>{//se llama id del boton para cifrar y se deja en escucha hasta hacer click y al hacer click hara los sigueintes eventos:

  let offset = parseInt(document.getElementById("offset").value); //guarda el numero del offset 
  let text = document.getElementById("message").value;//guarda el mensaje
  let result = cipher.encode(offset,text);//llama a mi funcion para cifrar y guarda el resultado
  document.getElementById("result").innerHTML =result; //llama al emento con el id resultado para mostrarlo 

});
//documento traeme el elmento con el id encode y mantente atento a cuando se aga click para que realices los eventos
document.getElementById("encode").addEventListener("click",()=>{location.reload

  let offset=parseInt(document.getElementById("offset").value);
  let text = document.getElementById("message").value;
  let result=cipher.decode(offset,text);
  document.getElementById("result").innerHTML=result;


});