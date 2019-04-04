window.cipher = {
  encode: (offset,text) => {
  let ascii="";
  let ascii1="";
  let result="";

  for(let i=0;i<text.length;i++)
  {  
   ascii=text.charCodeAt(i);//con esto guarda el codigo ascci en cada iteracion

    //if( ascii1>= 32 && ascii1<=64
   // if(ascii>=65 && ascii<=90)
    {
      ascii1=(ascii-65+offset)%26+65;//formula para obtener la posicion(numero) de la letra en nuestro abecedario
    }

   result += String.fromCharCode(ascii1);//trasforma el resultado de la formula en letra 
  }

  return result;
 
  },

  
  decode: (offset,text) => {
    let ascii="";
  let ascii1="";
  let result="";

  for(let i=0;i<text.length;i++)
  {  
    ascii=text.charCodeAt(i);

    //if(ascii>=65 && ascii<=90)
    {
      ascii1=(ascii-65-offset)%26+65;
    }

   result += String.fromCharCode(ascii1);
  }

  return result;

  }
}